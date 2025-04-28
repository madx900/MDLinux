# Advanced Bash Scripting 🚀

## Advanced Variable Operations

### 1. Parameter Expansion 🔄

```bash
# Default values
${var:-default}     # Use default if var unset
${var:=default}     # Set default if var unset
${var:+value}       # Use value if var set
${var:?error}       # Display error if var unset

# String operations
${var:offset}       # Substring from offset
${var:offset:length}# Substring with length
${#var}            # String length
${var#pattern}      # Remove shortest match from start
${var##pattern}     # Remove longest match from start
${var%pattern}      # Remove shortest match from end
${var%%pattern}     # Remove longest match from end
```

### 2. Arrays and Associative Arrays 📦

```bash
# Declare arrays
declare -a numeric_array
declare -A associative_array

# Array operations
array=([0]="first" [1]="second" [2]="third")
associative_array=([key1]="value1" [key2]="value2")

# Array manipulation
echo "${array[@]}"           # All elements
echo "${!array[@]}"          # All indices
echo "${#array[@]}"          # Array length
array+=("fourth")            # Append element
unset 'array[1]'            # Remove element
```

## Advanced Control Structures

### 1. Advanced Loop Constructs 🔁

```bash
# Select loop
select option in "Option 1" "Option 2" "Exit"; do
    case $option in
        "Option 1") echo "Selected 1" ;;
        "Option 2") echo "Selected 2" ;;
        "Exit") break ;;
    esac
done

# Continue and break with levels
for ((i=1; i<=3; i++)); do
    for ((j=1; j<=3; j++)); do
        [ $i -eq 2 ] && continue 2
        echo "$i,$j"
    done
done
```

### 2. Advanced Pattern Matching 🎯

```bash
# Extended pattern matching
shopt -s extglob

# Patterns
?(pattern)    # Zero or one occurrence
*(pattern)    # Zero or more occurrences
+(pattern)    # One or more occurrences
@(pattern)    # Exactly one occurrence
!(pattern)    # Not the pattern

# Example
case $file in
    *.@(jpg|jpeg|png)) echo "Image file" ;;
    *.!(txt|doc|pdf))  echo "Not a document" ;;
esac
```

## Process Management

### 1. Job Control 🔄

```bash
# Background processes
command &
jobs                # List jobs
fg %1              # Bring to foreground
bg %1              # Send to background
wait %1            # Wait for job

# Process substitution
diff <(ls dir1) <(ls dir2)
while read line; do
    echo "$line"
done < <(command)
```

### 2. Signals and Traps 🚦

```bash
# Signal handling
trap 'cleanup' EXIT
trap 'handle_sigint' SIGINT
trap 'handle_sigusr1' SIGUSR1

cleanup() {
    # Cleanup code
    rm -f "$tempfile"
}

# Send signals
kill -SIGUSR1 $pid
killall -SIGTERM process_name
```

## Advanced I/O Operations

### 1. File Descriptors 📂

```bash
# Redirect file descriptors
exec 3> output.log    # Open for writing
exec 4< input.txt     # Open for reading
echo "log" >&3        # Write to FD 3
read line <&4         # Read from FD 4
exec 3>&-             # Close FD 3

# Here documents
cat <<EOF > file.txt
Line 1
Line 2
EOF

# Here strings
grep "pattern" <<< "$string"
```

### 2. Process Substitution 🔄

```bash
# Compare outputs
diff <(sort file1) <(sort file2)

# Multiple inputs
while IFS= read -r line1 && IFS= read -r line2 <&3; do
    echo "$line1 - $line2"
done < file1 3< file2
```

## Advanced Functions

### 1. Function Libraries 📚

```bash
# Source function library
source lib.sh
. lib.sh

# Library example
lib_function() {
    local arg=$1
    # Function code
}

# Export functions
export -f function_name
```

### 2. Recursive Functions 🔄

```bash
factorial() {
    local n=$1
    if ((n <= 1)); then
        echo 1
    else
        echo $((n * $(factorial $((n-1)))))
    fi
}

# Directory traversal
traverse() {
    for item in "$1"/*; do
        if [ -d "$item" ]; then
            traverse "$item"
        else
            process_file "$item"
        fi
    done
}
```

## Advanced Error Handling

### 1. Debugging Techniques 🐛

```bash
# Debug mode
set -x              # Enable debug mode
set +x              # Disable debug mode

# Verbose mode
set -v              # Enable verbose mode
set +v              # Disable verbose mode

# Error checking
set -e              # Exit on error
set -u              # Exit on undefined variable
set -o pipefail     # Exit on pipe failure
```

### 2. Advanced Error Handling 🚨

```bash
# Error function
error() {
    local line=$1
    local msg=$2
    echo "Error on line $line: $msg" >&2
}

# Trap errors
trap 'error ${LINENO} "$BASH_COMMAND"' ERR

# Custom error handling
if ! command; then
    handle_error
    exit 1
fi
```

## Practice Examples 🎯

### 1. Advanced File Processing
```bash
#!/bin/bash

# Process multiple files with error handling
process_files() {
    local dir=$1
    local -a errors=()
    
    while IFS= read -r -d '' file; do
        if ! process_single_file "$file"; then
            errors+=("$file")
        fi
    done < <(find "$dir" -type f -print0)
    
    if ((${#errors[@]} > 0)); then
        echo "Failed files: ${errors[*]}" >&2
        return 1
    fi
}

# Main execution with cleanup
main() {
    local tempdir=$(mktemp -d)
    trap 'rm -rf "$tempdir"' EXIT
    
    if ! process_files "$1"; then
        echo "Processing failed" >&2
        exit 1
    fi
}

main "$@"
```

### 2. Network Monitor
```bash
#!/bin/bash

# Monitor network connections
monitor_network() {
    local -A connections
    local interval=${1:-5}
    
    while true; do
        while read -r line; do
            local ip=$(echo "$line" | awk '{print $5}')
            ((connections[$ip]++))
        done < <(netstat -tn 2>/dev/null)
        
        printf "\033c"  # Clear screen
        printf "Active connections:\n"
        for ip in "${!connections[@]}"; do
            printf "%s: %d\n" "$ip" "${connections[$ip]}"
        done
        
        sleep "$interval"
        unset connections
        declare -A connections
    done
}

# Start monitoring
monitor_network "$@"
```

## Best Practices 📚

1. **Code Organization**
   - Use functions
   - Modular design
   - Clear documentation
   - Consistent style

2. **Security**
   - Input validation
   - Proper permissions
   - Secure temporary files
   - Quote variables

3. **Performance**
   - Minimize subshells
   - Use built-ins
   - Efficient loops
   - Profile code

4. **Maintainability**
   - Version control
   - Clear comments
   - Error handling
   - Testing

## Next Steps 🚀

- [Shell Script Debugging](03-debugging.md)
- [Regular Expressions](04-regex.md)
- [Script Examples](05-script-examples.md)
- [System Administration](../admin/01-system-admin.md)
