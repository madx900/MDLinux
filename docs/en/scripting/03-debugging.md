# Shell Script Debugging 🐛

## Basic Debugging Tools

### 1. Built-in Debug Options 🔍

| Option | Description | Example |
|--------|-------------|---------|
| `set -x` | Print commands before execution | `set -x` |
| `set -v` | Print script lines as read | `set -v` |
| `set -e` | Exit on error | `set -e` |
| `set -u` | Exit on undefined variable | `set -u` |
| `set -n` | Check syntax without execution | `set -n` |

### 2. Debug Mode Usage 🚀

```bash
#!/bin/bash -x          # Debug entire script
set -x                  # Start debugging
command1
command2
set +x                  # Stop debugging

# Debug specific section
{
    set -x
    command1
    command2
    set +x
} 2> debug.log         # Redirect debug output
```

## Advanced Debugging Techniques

### 1. Tracing and Logging 📝

```bash
# Function tracing
function debug() {
    echo "DEBUG: $*" >&2
}

# Stack trace
function stack_trace() {
    local frame=0
    while caller $frame; do
        ((frame++))
    done
}

# Line number tracking
echo "Error on line $LINENO"

# Execution trace with timestamp
PS4='+ $(date "+%Y-%m-%d %H:%M:%S") ${BASH_SOURCE}:${LINENO}: '
set -x
```

### 2. Error Handling 🚨

```bash
# Error function
error() {
    local parent_lineno="$1"
    local message="$2"
    local code="${3:-1}"
    if [[ -n "$message" ]] ; then
        echo "Error on or near line ${parent_lineno}: ${message}"
    else
        echo "Error on or near line ${parent_lineno}"
    fi
    exit "${code}"
}

# Trap errors
trap 'error ${LINENO}' ERR

# Conditional debugging
DEBUG=${DEBUG:-0}
debug() {
    if [ "$DEBUG" -eq 1 ]; then
        echo "DEBUG: $*" >&2
    fi
}
```

## Interactive Debugging

### 1. Using bashdb 🔧

```bash
# Install bashdb
sudo apt-get install bashdb    # Debian/Ubuntu
sudo yum install bashdb        # RHEL/CentOS

# Run script in debugger
bashdb script.sh

# Common bashdb commands
break 10          # Set breakpoint at line 10
info break        # List breakpoints
step             # Step into
next             # Step over
continue         # Continue execution
print variable   # Print variable value
quit             # Exit debugger
```

### 2. Manual Debugging 🔍

```bash
# Interactive debugging
read -p "Press enter to continue..."

# Check variable values
echo "DEBUG: var=$var"

# Check if condition
if [ "$DEBUG" = true ]; then
    echo "DEBUG: condition met"
fi

# Check command output
command 2>&1 | tee debug.log
```

## Common Debugging Scenarios

### 1. Variable Problems 📦

```bash
# Undefined variables
set -u
: "${VARIABLE:?Must be set}"

# Array debugging
declare -p array_name

# Variable scope issues
local var="local"
echo "Inside function: $var"
```

### 2. Path and File Issues 📂

```bash
# Check file existence
[ -f "$file" ] || { echo "File not found: $file"; exit 1; }

# Check permissions
[ -r "$file" ] && [ -w "$file" ] || echo "Permission denied"

# Debug path issues
echo "PATH=$PATH"
which command || echo "Command not found"
```

## Debugging Best Practices

### 1. Code Organization 📋

```bash
# Use functions for better organization
main() {
    local result
    result=$(step1) || return
    step2 "$result" || return
}

# Enable debug mode selectively
debug_mode() {
    if [ "${DEBUG:-0}" -eq 1 ]; then
        set -x
    fi
}
```

### 2. Logging Framework 📝

```bash
# Logging levels
LOG_LEVEL=${LOG_LEVEL:-INFO}

log() {
    local level=$1
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case $LOG_LEVEL in
        DEBUG) [[ $level =~ ^(DEBUG|INFO|WARN|ERROR)$ ]] && echo "[$timestamp] $level: $message" ;;
        INFO)  [[ $level =~ ^(INFO|WARN|ERROR)$ ]] && echo "[$timestamp] $level: $message" ;;
        WARN)  [[ $level =~ ^(WARN|ERROR)$ ]] && echo "[$timestamp] $level: $message" ;;
        ERROR) [[ $level =~ ^(ERROR)$ ]] && echo "[$timestamp] $level: $message" ;;
    esac
}

# Usage
log DEBUG "Debug message"
log INFO "Info message"
log WARN "Warning message"
log ERROR "Error message"
```

## Practice Examples 🎯

### 1. Debug Helper Script
```bash
#!/bin/bash

# Debug helper functions
debug_info() {
    echo "=== Debug Information ==="
    echo "Script: $0"
    echo "PID: $$"
    echo "Arguments: $@"
    echo "Working Directory: $PWD"
    echo "Environment Variables:"
    env | sort
    echo "======================="
}

# Memory usage tracker
track_memory() {
    local pid=$1
    while ps -p $pid > /dev/null; do
        ps -o pid,ppid,%mem,rss,cmd -p $pid
        sleep 1
    done
}

# Usage example
debug_info "$@"
track_memory $$ &
```

### 2. Error Detection Script
```bash
#!/bin/bash

# Set error handling
set -euo pipefail
IFS=$'\n\t'

# Debug configuration
DEBUG=${DEBUG:-0}
TRACE=${TRACE:-0}

# Debug functions
debug() {
    [ "$DEBUG" -eq 1 ] && echo "DEBUG: $*" >&2
}

trace() {
    if [ "$TRACE" -eq 1 ]; then
        local frame=0
        echo "=== Stack Trace ===" >&2
        while caller $frame; do
            ((frame++))
        done
        echo "=================" >&2
    fi
}

# Error handler
error_handler() {
    local line_no=$1
    local error_code=$2
    echo "Error on line $line_no (Exit code: $error_code)" >&2
    trace
}

# Set trap
trap 'error_handler ${LINENO} $?' ERR

# Main execution
main() {
    debug "Starting main function"
    # Your code here
}

main "$@"
```

## Best Practices 📚

1. **Debugging Setup**
   - Use debug flags
   - Implement logging
   - Add error handlers
   - Include stack traces

2. **Code Quality**
   - Use shellcheck
   - Follow style guides
   - Add comments
   - Use functions

3. **Testing**
   - Unit tests
   - Integration tests
   - Edge cases
   - Error conditions

4. **Documentation**
   - Debug procedures
   - Known issues
   - Common fixes
   - Examples

## Next Steps 🚀

- [Regular Expressions](04-regex.md)
- [Script Examples](05-script-examples.md)
- [Advanced Bash](02-advanced-bash.md)
- [System Administration](../admin/01-system-admin.md)
