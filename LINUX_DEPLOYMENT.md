# Linux/NAS Server Deployment Guide

## 🖥️ Server Requirements

### Minimum Specifications
- **OS**: Ubuntu 20.04 LTS or CentOS 8+
- **CPU**: 2 cores (4+ recommended)
- **RAM**: 2GB minimum (4GB+ recommended)
- **Storage**: 10GB+ available space
- **Node.js**: 18.x or 20.x LTS
- **npm**: 9.x or higher

### Recommended Setup
- **OS**: Ubuntu 22.04 LTS
- **CPU**: 4+ cores
- **RAM**: 8GB+
- **Storage**: 50GB+ SSD
- **Node.js**: 20.x LTS
- **Docker**: For containerization

---

## 📋 Pre-Deployment Checklist

- [ ] SSH access to server
- [ ] Root or sudo privileges
- [ ] Domain name configured
- [ ] SSL certificate (Let's Encrypt)
- [ ] Firewall rules configured
- [ ] Backup strategy in place
- [ ] Monitoring tools ready
- [ ] Email SMTP configured

---

## 🚀 Step 1: Server Setup

### 1.1 Update System
```bash
sudo apt update
sudo apt upgrade -y
sudo apt install -y curl wget git build-essential
```

### 1.2 Install Node.js & npm
```bash
# Using NodeSource repository (Ubuntu)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version  # v20.x.x
npm --version   # 10.x.x
```

### 1.3 Install PM2 (Process Manager)
```bash
sudo npm install -g pm2
pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup systemd -u $USER --hp /home/$USER
```

### 1.4 Install Nginx (Reverse Proxy)
```bash
sudo apt install -y nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 1.5 Install SSL Certificate (Let's Encrypt)
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot certonly --nginx -d dmd-ascenseur.fr -d www.dmd-ascenseur.fr
```

---

## 📦 Step 2: Application Deployment

### 2.1 Clone Repository
```bash
cd /var/www
sudo git clone https://github.com/your-repo/damad-site.git
cd damad-site
sudo chown -R $USER:$USER .
```

### 2.2 Install Dependencies
```bash
npm install
npm ci --only=production  # For production
```

### 2.3 Build Application
```bash
npm run build
```

### 2.4 Create Environment File
```bash
nano .env.production
```

Add the following:
```bash
# Email Configuration
EMAIL_HOST=smtp.ionos.com
EMAIL_PORT=465
EMAIL_SECURE=true
EMAIL_USER=info@dmd-ascenseur.com
EMAIL_PASSWORD=your_password_here
EMAIL_FROM="DMD Ascenseur <info@dmd-ascenseur.com>"
EMAIL_TO=info@dmd-ascenseur.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://dmd-ascenseur.fr
NODE_ENV=production
```

---

## 🔧 Step 3: PM2 Configuration

### 3.1 Create PM2 Ecosystem File
```bash
nano ecosystem.config.js
```

Add:
```javascript
module.exports = {
  apps: [
    {
      name: 'dmd-ascenseur',
      script: './node_modules/.bin/next',
      args: 'start',
      cwd: '/var/www/damad-site',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: '/var/log/pm2/dmd-ascenseur-error.log',
      out_file: '/var/log/pm2/dmd-ascenseur-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      ignore_watch: ['node_modules', '.next', 'public'],
    },
  ],
};
```

### 3.2 Start Application with PM2
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 3.3 Monitor Application
```bash
pm2 monit
pm2 logs dmd-ascenseur
pm2 status
```

---

## 🌐 Step 4: Nginx Configuration

### 4.1 Create Nginx Config
```bash
sudo nano /etc/nginx/sites-available/dmd-ascenseur
```

Add:
```nginx
upstream dmd_ascenseur {
  server 127.0.0.1:3000;
  keepalive 64;
}

# Redirect HTTP to HTTPS
server {
  listen 80;
  listen [::]:80;
  server_name dmd-ascenseur.fr www.dmd-ascenseur.fr;
  
  location /.well-known/acme-challenge/ {
    root /var/www/certbot;
  }
  
  location / {
    return 301 https://$server_name$request_uri;
  }
}

# HTTPS Server
server {
  listen 443 ssl http2;
  listen [::]:443 ssl http2;
  server_name dmd-ascenseur.fr www.dmd-ascenseur.fr;

  # SSL Certificates
  ssl_certificate /etc/letsencrypt/live/dmd-ascenseur.fr/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/dmd-ascenseur.fr/privkey.pem;

  # SSL Configuration
  ssl_protocols TLSv1.2 TLSv1.3;
  ssl_ciphers HIGH:!aNULL:!MD5;
  ssl_prefer_server_ciphers on;
  ssl_session_cache shared:SSL:10m;
  ssl_session_timeout 10m;

  # Security Headers
  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
  add_header X-Frame-Options "DENY" always;
  add_header X-Content-Type-Options "nosniff" always;
  add_header X-XSS-Protection "1; mode=block" always;
  add_header Referrer-Policy "strict-origin-when-cross-origin" always;

  # Compression
  gzip on;
  gzip_vary on;
  gzip_proxied any;
  gzip_comp_level 6;
  gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss application/rss+xml font/truetype font/opentype application/vnd.ms-fontobject image/svg+xml;

  # Proxy Settings
  location / {
    proxy_pass http://dmd_ascenseur;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
    proxy_buffering off;
  }

  # Static Files Caching
  location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }

  # Disable Access to Hidden Files
  location ~ /\. {
    deny all;
  }

  # Logs
  access_log /var/log/nginx/dmd-ascenseur-access.log;
  error_log /var/log/nginx/dmd-ascenseur-error.log;
}
```

### 4.2 Enable Nginx Config
```bash
sudo ln -s /etc/nginx/sites-available/dmd-ascenseur /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## 🔒 Step 5: Firewall Configuration

### 5.1 UFW Firewall Setup
```bash
sudo ufw enable
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw status
```

---

## 📊 Step 6: Monitoring & Logging

### 6.1 Install Monitoring Tools
```bash
# Install htop for system monitoring
sudo apt install -y htop

# Install logrotate for log management
sudo apt install -y logrotate
```

### 6.2 Configure Log Rotation
```bash
sudo nano /etc/logrotate.d/dmd-ascenseur
```

Add:
```
/var/log/pm2/dmd-ascenseur-*.log {
  daily
  rotate 14
  compress
  delaycompress
  notifempty
  create 0640 $USER adm
  sharedscripts
  postrotate
    pm2 reload dmd-ascenseur > /dev/null 2>&1 || true
  endscript
}

/var/log/nginx/dmd-ascenseur-*.log {
  daily
  rotate 14
  compress
  delaycompress
  notifempty
  create 0640 www-data adm
  sharedscripts
  postrotate
    nginx -s reload > /dev/null 2>&1 || true
  endscript
}
```

### 6.3 Monitor Application
```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs dmd-ascenseur

# Monitor system
htop

# Check Nginx
sudo systemctl status nginx
tail -f /var/log/nginx/dmd-ascenseur-access.log
```

---

## 🔄 Step 7: Updates & Maintenance

### 7.1 Auto-Update SSL Certificate
```bash
# Certbot auto-renewal (runs twice daily)
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

### 7.2 Update Application
```bash
cd /var/www/damad-site
git pull origin main
npm install
npm run build
pm2 restart dmd-ascenseur
```

### 7.3 Backup Strategy
```bash
# Create backup script
nano /home/$USER/backup.sh
```

Add:
```bash
#!/bin/bash
BACKUP_DIR="/backups/dmd-ascenseur"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR

# Backup application
tar -czf $BACKUP_DIR/app_$DATE.tar.gz /var/www/damad-site

# Backup environment
cp /var/www/damad-site/.env.production $BACKUP_DIR/env_$DATE.bak

# Keep only last 30 days
find $BACKUP_DIR -type f -mtime +30 -delete

echo "Backup completed: $DATE"
```

Make it executable and add to cron:
```bash
chmod +x /home/$USER/backup.sh
crontab -e

# Add: 0 2 * * * /home/$USER/backup.sh
```

---

## 🐳 Step 8: Docker Deployment (Optional)

### 8.1 Create Dockerfile
```dockerfile
FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy application
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
```

### 8.2 Create docker-compose.yml
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - EMAIL_HOST=${EMAIL_HOST}
      - EMAIL_PORT=${EMAIL_PORT}
      - EMAIL_SECURE=${EMAIL_SECURE}
      - EMAIL_USER=${EMAIL_USER}
      - EMAIL_PASSWORD=${EMAIL_PASSWORD}
      - EMAIL_FROM=${EMAIL_FROM}
      - EMAIL_TO=${EMAIL_TO}
    restart: unless-stopped
    volumes:
      - ./logs:/app/logs
    networks:
      - dmd-network

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - /etc/letsencrypt:/etc/letsencrypt
    depends_on:
      - app
    restart: unless-stopped
    networks:
      - dmd-network

networks:
  dmd-network:
    driver: bridge
```

### 8.3 Deploy with Docker
```bash
docker-compose up -d
docker-compose logs -f
```

---

## 🚨 Troubleshooting

### Application Won't Start
```bash
# Check PM2 logs
pm2 logs dmd-ascenseur

# Check environment variables
cat /var/www/damad-site/.env.production

# Rebuild application
cd /var/www/damad-site
npm run build
pm2 restart dmd-ascenseur
```

### Nginx Connection Refused
```bash
# Check if application is running
pm2 status

# Check Nginx config
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### SSL Certificate Issues
```bash
# Renew certificate
sudo certbot renew --dry-run

# Check certificate expiry
sudo certbot certificates

# Renew immediately
sudo certbot renew --force-renewal
```

### High Memory Usage
```bash
# Check memory usage
pm2 monit

# Restart application
pm2 restart dmd-ascenseur

# Increase max memory limit in ecosystem.config.js
max_memory_restart: '2G'
```

---

## 📈 Performance Optimization

### 1. Enable Caching
```bash
# In Nginx config - already included
expires 1y;
add_header Cache-Control "public, immutable";
```

### 2. Enable Compression
```bash
# In Nginx config - already included
gzip on;
gzip_comp_level 6;
```

### 3. Database Connection Pooling
```bash
# If using database in future
max_connections: 20
connection_timeout: 30000
```

### 4. Load Balancing (Multiple Instances)
```bash
# In ecosystem.config.js
instances: 'max'
exec_mode: 'cluster'
```

---

## 📞 Support & Resources

- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **PM2 Documentation**: https://pm2.keymetrics.io
- **Nginx Documentation**: https://nginx.org/en/docs/
- **Let's Encrypt**: https://letsencrypt.org
- **Ubuntu Server Guide**: https://ubuntu.com/server/docs

---

**Status**: ✅ Ready for Linux/NAS Deployment
**Last Updated**: October 30, 2025
**Tested On**: Ubuntu 22.04 LTS, Node.js 20.x
