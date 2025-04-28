# Bash Script Examples 📚

## System Administration Scripts

### 1. System Health Monitor 🔍

```bash
#!/bin/bash

# Monitor system health and resources
monitor_system() {
    echo "=== System Health Report ==="
    date
    
    echo -e "\n=== CPU Usage ==="
    top -bn1 | head -n 3
    
    echo -e "\n=== Memory Usage ==="
    free -h
    
    echo -e "\n=== Disk Usage ==="
    df -h
    
    echo -e "\n=== System Load ==="
    uptime
    
    echo -e "\n=== Active Users ==="
    who
}

# Run monitoring every 5 minutes
while true; do
    monitor_system > "health_$(date +%Y%m%d_%H%M).log"
    sleep 300
done
```

### 2. Backup Script 💾

```bash
#!/bin/bash

# Configuration
BACKUP_DIR="/backup"
SOURCE_DIR="/data"
DATE=$(date +%Y%m%d_%H%M)
BACKUP_NAME="backup_$DATE.tar.gz"
LOG_FILE="/var/log/backup.log"

# Create backup
backup() {
    echo "Starting backup at $(date)" >> "$LOG_FILE"
    
    # Create backup directory if it doesn't exist
    mkdir -p "$BACKUP_DIR"
    
    # Create backup
    tar -czf "$BACKUP_DIR/$BACKUP_NAME" "$SOURCE_DIR" 2>> "$LOG_FILE"
    
    # Check status
    if [ $? -eq 0 ]; then
        echo "Backup successful: $BACKUP_NAME" >> "$LOG_FILE"
    else
        echo "Backup failed: $BACKUP_NAME" >> "$LOG_FILE"
        return 1
    fi
    
    # Remove old backups (keep last 5)
    ls -t "$BACKUP_DIR"/*.tar.gz | tail -n +6 | xargs -r rm
}

backup
```

## File Management Scripts

### 1. File Organizer 📁

```bash
#!/bin/bash

# Organize files by extension
organize_files() {
    local dir=$1
    
    # File type directories
    declare -A types=(
        ["images"]="jpg jpeg png gif"
        ["documents"]="pdf doc docx txt odt"
        ["audio"]="mp3 wav ogg"
        ["video"]="mp4 avi mkv mov"
        ["archives"]="zip tar gz rar"
    )
    
    # Create directories and move files
    for type in "${!types[@]}"; do
        mkdir -p "$dir/$type"
        for ext in ${types[$type]}; do
            find "$dir" -maxdepth 1 -type f -name "*.$ext" -exec mv {} "$dir/$type/" \;
        done
    done
    
    echo "Files organized successfully!"
}

# Usage
organize_files "$HOME/Downloads"
```

### 2. File Search and Replace 🔎

```bash
#!/bin/bash

# Search and replace text in files
search_replace() {
    local search=$1
    local replace=$2
    local dir=$3
    local ext=${4:-"*"}
    local backup=".bak"
    
    # Find files and process
    find "$dir" -type f -name "*.$ext" | while read -r file; do
        if grep -q "$search" "$file"; then
            echo "Processing: $file"
            cp "$file" "$file$backup"
            sed -i "s/$search/$replace/g" "$file"
        fi
    done
}

# Usage example
search_replace "old_text" "new_text" "/path/to/dir" "txt"
```

## Network Scripts

### 1. Network Monitor 🌐

```bash
#!/bin/bash

# Monitor network connections and bandwidth
monitor_network() {
    local interface=${1:-"eth0"}
    local interval=${2:-1}
    
    echo "Monitoring network interface: $interface"
    echo "Press Ctrl+C to stop"
    
    # Previous values
    local prev_rx=0
    local prev_tx=0
    
    while true; do
        # Get current values
        local stats=$(cat /proc/net/dev | grep "$interface:")
        local rx=$(echo "$stats" | awk '{print $2}')
        local tx=$(echo "$stats" | awk '{print $10}')
        
        # Calculate speed
        local rx_speed=$(( (rx - prev_rx) / interval ))
        local tx_speed=$(( (tx - prev_tx) / interval ))
        
        # Convert to MB/s
        rx_speed=$(echo "scale=2; $rx_speed/1048576" | bc)
        tx_speed=$(echo "scale=2; $tx_speed/1048576" | bc)
        
        echo "$(date +%H:%M:%S) RX: ${rx_speed}MB/s TX: ${tx_speed}MB/s"
        
        prev_rx=$rx
        prev_tx=$tx
        sleep "$interval"
    done
}

# Usage
monitor_network "eth0" 2
```

### 2. Port Scanner 🔍

```bash
#!/bin/bash

# Scan ports on a host
port_scan() {
    local host=$1
    local start_port=${2:-1}
    local end_port=${3:-1024}
    local timeout=1
    
    echo "Scanning $host from port $start_port to $end_port"
    
    for port in $(seq "$start_port" "$end_port"); do
        (echo >/dev/tcp/"$host"/"$port") >/dev/null 2>&1 &&
            echo "Port $port is open"
    done
}

# Usage
port_scan "localhost" 20 100
```

## Automation Scripts

### 1. Log Rotation 📄

```bash
#!/bin/bash

# Rotate and compress log files
rotate_logs() {
    local log_dir=$1
    local max_size=${2:-10485760}  # 10MB default
    local keep_days=${3:-7}
    
    find "$log_dir" -type f -name "*.log" | while read -r log_file; do
        # Check file size
        size=$(stat -f%z "$log_file")
        
        if [ "$size" -gt "$max_size" ]; then
            echo "Rotating $log_file"
            timestamp=$(date +%Y%m%d_%H%M%S)
            mv "$log_file" "$log_file.$timestamp"
            gzip "$log_file.$timestamp"
            touch "$log_file"
        fi
    done
    
    # Remove old logs
    find "$log_dir" -name "*.gz" -mtime +"$keep_days" -delete
}

# Usage
rotate_logs "/var/log" 5242880 5
```

### 2. Automated Deployment 🚀

```bash
#!/bin/bash

# Deploy application to server
deploy_app() {
    local app_name=$1
    local version=$2
    local target_dir="/var/www/$app_name"
    local backup_dir="/var/www/backups"
    local timestamp=$(date +%Y%m%d_%H%M%S)
    
    echo "Deploying $app_name version $version"
    
    # Create backup
    echo "Creating backup..."
    mkdir -p "$backup_dir"
    tar -czf "$backup_dir/${app_name}_${timestamp}.tar.gz" "$target_dir"
    
    # Deploy new version
    echo "Deploying new version..."
    git -C "$target_dir" pull origin "$version"
    
    # Update dependencies
    if [ -f "$target_dir/package.json" ]; then
        echo "Updating Node.js dependencies..."
        npm --prefix "$target_dir" install
    fi
    
    if [ -f "$target_dir/requirements.txt" ]; then
        echo "Updating Python dependencies..."
        pip install -r "$target_dir/requirements.txt"
    fi
    
    # Restart service
    echo "Restarting service..."
    systemctl restart "$app_name"
    
    echo "Deployment completed successfully!"
}

# Usage
deploy_app "myapp" "v1.2.3"
```

## Best Practices 📚

1. **Script Structure**
   - Clear documentation
   - Modular design
   - Error handling
   - Logging

2. **Security**
   - Input validation
   - Secure permissions
   - Error checking
   - Backup procedures

3. **Performance**
   - Efficient algorithms
   - Resource monitoring
   - Optimization
   - Caching

4. **Maintenance**
   - Version control
   - Regular updates
   - Testing
   - Documentation

## Next Steps 🚀

- [Advanced Bash](02-advanced-bash.md)
- [Shell Debugging](03-debugging.md)
- [Regular Expressions](04-regex.md)
- [System Administration](../admin/01-system-admin.md)
