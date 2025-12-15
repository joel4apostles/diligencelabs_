#!/bin/bash
# Hostinger Deployment Script for Diligence Labs

set -e

echo "🚀 Starting deployment to Hostinger VPS..."

# Configuration
PROJECT_DIR="/var/www/diligencelabs_"
BACKUP_DIR="/var/backups/diligencelabs"
DATE=$(date +%Y%m%d_%H%M%S)

# Create backup
echo "📦 Creating backup..."
mkdir -p $BACKUP_DIR
tar -czf $BACKUP_DIR/backup_$DATE.tar.gz -C $PROJECT_DIR .

# Navigate to project directory
cd $PROJECT_DIR

# Pull latest changes
echo "📥 Pulling latest changes from repository..."
git pull origin main

# Install dependencies
echo "📚 Installing dependencies..."
npm ci --production

# Build the application
echo "🔨 Building application..."
npm run build

# Restart application
echo "🔄 Restarting application..."
pm2 restart diligence-labs

# Wait for application to start
echo "⏳ Waiting for application to start..."
sleep 5

# Health check
echo "🏥 Performing health check..."
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Deployment successful! Application is running."
else
    echo "❌ Health check failed. Rolling back..."
    # Rollback logic here if needed
    pm2 restart diligence-labs
    exit 1
fi

# Clean old backups (keep last 5)
echo "🧹 Cleaning old backups..."
cd $BACKUP_DIR
ls -t backup_*.tar.gz | tail -n +6 | xargs rm -f

echo "🎉 Deployment completed successfully!"
echo "🌐 Visit: https://your-domain.com"