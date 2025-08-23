# Guide de Déploiement - DMD Ascenseur

Ce document détaille les étapes nécessaires pour déployer le site web DMD Ascenseur sur un serveur Linux, configurer le serveur SMTP et assurer le bon fonctionnement de l'application.

## Table des matières

1. [Prérequis](#prérequis)
2. [Installation des dépendances](#installation-des-dépendances)
3. [Configuration de l'environnement](#configuration-de-lenvironnement)
4. [Déploiement de l'application](#déploiement-de-lapplication)
5. [Configuration du serveur web (Nginx)](#configuration-du-serveur-web-nginx)
6. [Configuration SSL avec Let's Encrypt](#configuration-ssl-avec-lets-encrypt)
7. [Configuration SMTP](#configuration-smtp)
8. [Gestion des processus avec PM2](#gestion-des-processus-avec-pm2)
9. [Surveillance et maintenance](#surveillance-et-maintenance)
10. [Résolution des problèmes courants](#résolution-des-problèmes-courants)

## Prérequis

- Un serveur Linux (Ubuntu 20.04 LTS ou plus récent recommandé)
- Accès SSH au serveur avec privilèges sudo
- Un nom de domaine pointant vers l'adresse IP du serveur
- Accès à un compte email pour la configuration SMTP (Gmail Workspace recommandé)

## Installation des dépendances

Connectez-vous à votre serveur via SSH et exécutez les commandes suivantes :

```bash
# Mettre à jour les paquets
sudo apt update
sudo apt upgrade -y

# Installer Node.js (version 18.x ou plus récente)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Vérifier les versions
node -v  # Devrait afficher v18.x.x ou plus récent
npm -v   # Devrait afficher 8.x.x ou plus récent

# Installer Nginx
sudo apt install -y nginx

# Installer PM2 pour la gestion des processus
sudo npm install -g pm2
```

## Configuration de l'environnement

### 1. Créer un répertoire pour l'application

```bash
sudo mkdir -p /var/www/dmd-ascenseur
sudo chown -R $USER:$USER /var/www/dmd-ascenseur
```

### 2. Configurer les variables d'environnement

Créez un fichier `.env.production` dans le répertoire de l'application :

```bash
cd /var/www/dmd-ascenseur
nano .env.production
```

Ajoutez les variables d'environnement suivantes :

```
NODE_ENV=production

# Configuration email
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_SECURE=true
EMAIL_USER=info@dmd-ascenseur.fr
EMAIL_PASSWORD=votre_mot_de_passe_ou_clé_app
EMAIL_FROM="Site Web DAMAD <info@dmd-ascenseur.fr>"
EMAIL_TO=info@dmd-ascenseur.fr
```

## Déploiement de l'application

### 1. Construire l'application en local

Sur votre machine de développement :

```bash
# Construire l'application
npm run build

# Vérifier que la construction s'est bien déroulée
ls -la .next
```

### 2. Transférer les fichiers vers le serveur

Utilisez SCP ou SFTP pour transférer les fichiers nécessaires :

```bash
# Depuis votre machine locale
scp -r .next package.json package-lock.json public next.config.ts user@votre-serveur:/var/www/dmd-ascenseur/
```

### 3. Installer les dépendances de production sur le serveur

```bash
cd /var/www/dmd-ascenseur
npm install --production
```

## Configuration du serveur web (Nginx)

### 1. Créer une configuration Nginx

```bash
sudo nano /etc/nginx/sites-available/dmd-ascenseur.fr
```

Ajoutez la configuration suivante :

```nginx
server {
    listen 80;
    server_name dmd-ascenseur.fr www.dmd-ascenseur.fr;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
    
    # Augmenter la taille maximale des requêtes pour les formulaires
    client_max_body_size 10M;
    
    # Ajouter des en-têtes de sécurité
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

### 2. Activer la configuration

```bash
sudo ln -s /etc/nginx/sites-available/dmd-ascenseur.fr /etc/nginx/sites-enabled/
sudo nginx -t  # Vérifier la syntaxe
sudo systemctl reload nginx
```

## Configuration SSL avec Let's Encrypt

### 1. Installer Certbot

```bash
sudo apt install -y certbot python3-certbot-nginx
```

### 2. Obtenir un certificat SSL

```bash
sudo certbot --nginx -d dmd-ascenseur.fr -d www.dmd-ascenseur.fr
```

Suivez les instructions à l'écran. Certbot mettra automatiquement à jour votre configuration Nginx.

### 3. Vérifier le renouvellement automatique

```bash
sudo certbot renew --dry-run
```

## Configuration SMTP

### 1. Configuration avec Gmail Workspace

Pour utiliser Gmail Workspace comme serveur SMTP, vous devez :

1. Vous connecter à la console d'administration Google Workspace
2. Activer l'accès SMTP pour votre compte info@dmd-ascenseur.fr
3. Générer un mot de passe d'application spécifique (recommandé) :
   - Accédez à votre compte Google
   - Allez dans "Sécurité" > "Connexion à Google"
   - Activez la validation en deux étapes si ce n'est pas déjà fait
   - Créez un mot de passe d'application pour "Autre (nom personnalisé)"
   - Utilisez ce mot de passe dans votre fichier `.env.production`

### 2. Configuration DNS pour l'email

Ajoutez les enregistrements DNS suivants pour améliorer la délivrabilité des emails :

```
# Enregistrement SPF
TXT  @  "v=spf1 include:_spf.google.com ~all"

# Enregistrement DKIM (à obtenir depuis la console Google Workspace)
TXT  google._domainkey  "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA..."

# Enregistrement DMARC
TXT  _dmarc  "v=DMARC1; p=quarantine; rua=mailto:info@dmd-ascenseur.fr"
```

### 3. Tester la configuration SMTP

Créez un script de test dans `/var/www/dmd-ascenseur/test-email.js` :

```javascript
const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.production' });

async function main() {
  console.log('Configuration SMTP:', {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE === 'true',
    user: process.env.EMAIL_USER
  });

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const info = await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: 'Test Email - DMD Ascenseur',
    text: 'Si vous recevez cet email, la configuration SMTP fonctionne correctement.',
    html: '<p>Si vous recevez cet email, la <b>configuration SMTP</b> fonctionne correctement.</p>',
  });

  console.log('Message envoyé:', info.messageId);
}

main().catch(console.error);
```

Exécutez le test :

```bash
cd /var/www/dmd-ascenseur
node test-email.js
```

## Gestion des processus avec PM2

### 1. Démarrer l'application avec PM2

```bash
cd /var/www/dmd-ascenseur
pm2 start npm --name "dmd-website" -- start
```

### 2. Configurer le démarrage automatique

```bash
pm2 startup
# Exécutez la commande suggérée par PM2
pm2 save
```

### 3. Commandes PM2 utiles

```bash
# Voir les logs
pm2 logs dmd-website

# Redémarrer l'application
pm2 restart dmd-website

# Voir le statut
pm2 status

# Surveiller les ressources
pm2 monit
```

## Surveillance et maintenance

### 1. Configurer la rotation des logs

```bash
sudo nano /etc/logrotate.d/pm2-dmd
```

Ajoutez :

```
/home/user/.pm2/logs/*.log {
    daily
    rotate 7
    compress
    delaycompress
    missingok
    notifempty
    create 0640 user user
}
```

### 2. Configurer des sauvegardes automatiques

```bash
sudo nano /etc/cron.daily/backup-dmd
```

Ajoutez :

```bash
#!/bin/bash
BACKUP_DIR="/var/backups/dmd-website"
mkdir -p $BACKUP_DIR
DATE=$(date +%Y-%m-%d)
tar -czf $BACKUP_DIR/dmd-backup-$DATE.tar.gz /var/www/dmd-ascenseur
find $BACKUP_DIR -type f -name "*.tar.gz" -mtime +14 -delete
```

Rendez le script exécutable :

```bash
sudo chmod +x /etc/cron.daily/backup-dmd
```

### 3. Configurer la surveillance du site

Utilisez un service comme UptimeRobot ou Freshping pour surveiller la disponibilité du site.

## Résolution des problèmes courants

### Problèmes de connexion SMTP

1. Vérifiez que le mot de passe d'application est correct
2. Assurez-vous que l'accès SMTP est activé dans Google Workspace
3. Vérifiez les journaux d'erreur avec `pm2 logs dmd-website`

### Problèmes de certificat SSL

```bash
# Forcer le renouvellement du certificat
sudo certbot renew --force-renewal

# Vérifier le statut du certificat
sudo certbot certificates
```

### Problèmes de performance

1. Vérifiez l'utilisation des ressources avec `htop`
2. Surveillez les performances de l'application avec `pm2 monit`
3. Vérifiez les logs Nginx : `sudo tail -f /var/log/nginx/error.log`

### Redémarrage après une mise à jour

```bash
cd /var/www/dmd-ascenseur
git pull  # Si vous utilisez Git
npm install --production
npm run build
pm2 restart dmd-website
```
