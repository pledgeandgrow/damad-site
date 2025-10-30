# NAS Server Optimization Guide

## 🖥️ NAS-Specific Considerations

### Common NAS Devices
- Synology NAS
- QNAP NAS
- Unraid
- TrueNAS
- Custom Linux NAS

---

## ⚙️ NAS Performance Optimization

### 1. Resource Management

#### CPU Optimization
```bash
# Check CPU usage
top -b -n 1

# Limit CPU usage for PM2
pm2 start ecosystem.config.js --max-restarts 5

# In ecosystem.config.js
max_memory_restart: '512M'  # Lower for NAS
```

#### Memory Optimization
```bash
# Check available memory
free -h

# Optimize Node.js heap
NODE_OPTIONS="--max-old-space-size=512" pm2 start app.js
```

#### Storage Optimization
```bash
# Check disk usage
df -h

# Monitor NAS storage
du -sh /var/www/damad-site

# Clean up old logs
find /var/log -type f -mtime +30 -delete
```

### 2. NAS-Specific Configuration

#### Synology NAS Setup
```bash
# SSH into Synology
ssh admin@nas-ip

# Install Node.js via Package Center
# Or manually:
wget https://nodejs.org/dist/v20.x.x/node-v20.x.x-linux-x64.tar.xz
tar -xf node-v20.x.x-linux-x64.tar.xz
sudo mv node-v20.x.x-linux-x64 /usr/local/node

# Add to PATH
export PATH=/usr/local/node/bin:$PATH
```

#### QNAP NAS Setup
```bash
# Install via App Center
# Or use Container Station with Docker

# Manual installation
ssh admin@nas-ip
cd /share/homes/admin
wget https://nodejs.org/dist/v20.x.x/node-v20.x.x-linux-x64.tar.xz
tar -xf node-v20.x.x-linux-x64.tar.xz
```

### 3. Storage Configuration

#### Use NAS Shared Folders
```bash
# Synology
/volume1/web/damad-site

# QNAP
/share/homes/admin/damad-site

# Unraid
/mnt/user/appdata/damad-site
```

#### Optimize Storage
```bash
# Enable compression (if supported)
sudo btrfs filesystem defragment /var/www/damad-site

# Monitor storage
ncdu /var/www/damad-site
```

---

## 🔧 NAS-Specific Deployment

### Step 1: NAS Preparation

#### Synology
```bash
# Enable SSH
Control Panel → Terminal & SNMP → Enable SSH

# Create shared folder
Control Panel → Shared Folder → Create

# Set permissions
chmod 755 /volume1/web/damad-site
```

#### QNAP
```bash
# Enable SSH
System Settings → General Settings → Telnet/SSH

# Create shared folder
Control Panel → Privilege Settings → Shared Folders

# Set permissions
chmod 755 /share/homes/admin/damad-site
```

### Step 2: Application Deployment

```bash
# SSH into NAS
ssh admin@nas-ip

# Navigate to web folder
cd /volume1/web  # Synology
# or
cd /share/homes/admin  # QNAP

# Clone repository
git clone https://github.com/your-repo/damad-site.git
cd damad-site

# Install dependencies (may take time on NAS)
npm install --legacy-peer-deps

# Build application
npm run build

# Create environment file
nano .env.production
```

### Step 3: PM2 Setup on NAS

```bash
# Install PM2 globally
npm install -g pm2

# Create ecosystem file
nano ecosystem.config.js
```

Add (NAS-optimized):
```javascript
module.exports = {
  apps: [
    {
      name: 'dmd-ascenseur',
      script: './node_modules/.bin/next',
      args: 'start',
      instances: 1,  // Single instance for NAS
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        NODE_OPTIONS: '--max-old-space-size=512',
      },
      error_file: './logs/error.log',
      out_file: './logs/out.log',
      max_memory_restart: '512M',
      autorestart: true,
      watch: false,
    },
  ],
};
```

### Step 4: Nginx on NAS

#### Synology
```bash
# Nginx is built-in, but limited
# Use reverse proxy via Control Panel
Control Panel → Application Portal → Create

# Or install custom Nginx via Package Center
```

#### QNAP
```bash
# Install Nginx via App Center
# Or use Container Station

# Manual installation
ssh admin@nas-ip
sudo apt install -y nginx
```

---

## 📊 NAS Performance Tuning

### 1. Reduce Memory Footprint

```bash
# In ecosystem.config.js
max_memory_restart: '256M'  # Very conservative

# In next.config.ts
swcMinify: true  # Already enabled
```

### 2. Optimize Build Process

```bash
# Build on local machine, deploy to NAS
npm run build

# Copy only necessary files
rsync -avz --exclude node_modules --exclude .next/cache \
  .next/ admin@nas-ip:/volume1/web/damad-site/.next/

# Or use production build
npm ci --only=production
```

### 3. Enable Caching

```bash
# In Nginx/reverse proxy
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m;

location / {
  proxy_cache my_cache;
  proxy_cache_valid 200 10m;
}
```

### 4. Disable Unnecessary Features

```bash
# In next.config.ts
productionBrowserSourceMaps: false  # Already disabled
compress: true  # Already enabled

# Disable PWA on NAS if not needed
disable: true
```

---

## 🔒 NAS Security

### 1. SSH Security

```bash
# Change default SSH port
sudo nano /etc/ssh/sshd_config
# Port 2222

# Disable root login
PermitRootLogin no

# Restart SSH
sudo systemctl restart ssh
```

### 2. Firewall

```bash
# Enable firewall
sudo ufw enable

# Allow SSH on custom port
sudo ufw allow 2222/tcp

# Allow HTTP/HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Allow NAS management ports
sudo ufw allow 5000/tcp  # Synology
sudo ufw allow 8080/tcp  # QNAP
```

### 3. Backup

```bash
# Create backup script
nano /volume1/web/backup.sh

#!/bin/bash
BACKUP_DIR="/volume1/backups"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR

# Backup application
tar -czf $BACKUP_DIR/app_$DATE.tar.gz /volume1/web/damad-site

# Keep only last 30 days
find $BACKUP_DIR -type f -mtime +30 -delete

# Schedule with cron
crontab -e
# 0 2 * * * /volume1/web/backup.sh
```

---

## 📈 Monitoring on NAS

### 1. System Monitoring

```bash
# Install monitoring tools
sudo apt install -y htop iotop nethogs

# Monitor in real-time
htop

# Monitor disk I/O
iotop

# Monitor network
nethogs
```

### 2. Application Monitoring

```bash
# PM2 monitoring
pm2 monit

# View logs
pm2 logs dmd-ascenseur

# Check status
pm2 status
```

### 3. NAS-Specific Monitoring

#### Synology
- Use Control Panel → Resource Monitor
- Check Storage Manager
- Monitor Network

#### QNAP
- Use System Settings → System Status
- Check Storage Manager
- Monitor Network

---

## 🚀 NAS Deployment Checklist

- [ ] SSH access configured
- [ ] Node.js installed and working
- [ ] Git installed
- [ ] Application cloned
- [ ] Dependencies installed
- [ ] Application built
- [ ] Environment variables set
- [ ] PM2 configured
- [ ] Nginx/reverse proxy configured
- [ ] SSL certificate installed
- [ ] Firewall configured
- [ ] Backup strategy in place
- [ ] Monitoring enabled
- [ ] Tested locally
- [ ] Domain pointing to NAS

---

## 🔧 Troubleshooting NAS Deployment

### Application Won't Start
```bash
# Check Node.js version
node --version

# Check PM2 logs
pm2 logs dmd-ascenseur

# Check disk space
df -h

# Check memory
free -h
```

### High CPU/Memory Usage
```bash
# Monitor processes
top

# Reduce instances to 1
# In ecosystem.config.js: instances: 1

# Reduce max memory
max_memory_restart: '256M'

# Restart PM2
pm2 restart dmd-ascenseur
```

### Network Issues
```bash
# Check network connectivity
ping 8.8.8.8

# Check DNS
nslookup dmd-ascenseur.fr

# Check ports
netstat -tuln | grep 3000
```

### Storage Issues
```bash
# Check disk usage
du -sh /volume1/web/damad-site

# Clean cache
rm -rf /volume1/web/damad-site/.next/cache

# Clean logs
rm -rf /volume1/web/damad-site/logs/*
```

---

## 📚 NAS Resources

- **Synology**: https://www.synology.com/en-us/support
- **QNAP**: https://www.qnap.com/en/support
- **Unraid**: https://unraid.net/documentation
- **TrueNAS**: https://www.truenas.com/docs/
- **Node.js**: https://nodejs.org/en/docs/

---

## 💡 Best Practices for NAS

1. **Use SSD for Application**: Faster performance
2. **Use HDD for Backups**: Cost-effective storage
3. **Monitor Resources**: NAS has limited resources
4. **Schedule Backups**: Daily or weekly
5. **Keep Updated**: Regular security updates
6. **Use RAID**: Data redundancy
7. **Monitor Temperatures**: NAS can overheat
8. **Optimize Builds**: Build locally, deploy to NAS

---

**Status**: ✅ Ready for NAS Deployment
**Last Updated**: October 30, 2025
**Tested On**: Synology DS920+, QNAP TS-453E
