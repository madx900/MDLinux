# Bash Scripting Basics 📝

## Script Structure

### 1. Basic Script Elements ✍️

```bash
#!/bin/bash                 # Shebang - defines script interpreter
# This is a comment        # Comments start with #
name="World"               # Variable assignment
echo "Hello, $name!"       # Variable usage
```

### 2. Script Permissions 🔐

| Command | Description | Example |
|---------|-------------|---------|
| `chmod +x` | Make executable | `chmod +x script.sh` |
| `chmod 755` | Set standard permissions | `chmod 755 script.sh` |
| `./script.sh` | Run script | `./script.sh` |
| `bash script.sh` | Run with bash | `bash script.sh` |
| `source script.sh` | Source script | `source script.sh` |

## Variables and Data Types

### 1. Variable Declaration 📦

```bash
# String variables
name="John"
greeting="Hello"

# Numeric variables
age=25
count=0

# Arrays
colors=("red" "green" "blue")
numbers=(1 2 3 4 5)

# Constants
readonly MAX_COUNT=100
declare -r PI=3.14159
```

### 2. Variable Operations 🔄

```bash
# String concatenation
full_greeting="$greeting, $name!"

# Arithmetic operations
total=$((age + 5))
squared=$((count * count))

# Array operations
echo "${colors[0]}"          # Access first element
echo "${colors[@]}"          # Access all elements
echo "${#colors[@]}"         # Array length
```

## Control Structures

### 1. Conditional Statements 🔀

```bash
# If statement
if [ "$age" -ge 18 ]; then
    echo "Adult"
elif [ "$age" -ge 13 ]; then
    echo "Teenager"
else
    echo "Child"
fi

# Case statement
case "$fruit" in
    "apple")
        echo "Selected apple"
        ;;
    "banana"|"orange")
        echo "Selected tropical fruit"
        ;;
    *)
        echo "Unknown fruit"
        ;;
esac
```

### 2. Loops 🔁

```bash
# For loop
for i in {1..5}; do
    echo "Count: $i"
done

# While loop
while [ "$count" -lt 10 ]; do
    echo "Count: $count"
    ((count++))
done

# Until loop
until [ "$count" -eq 0 ]; do
    echo "Countdown: $count"
    ((count--))
done
```

## Functions

### 1. Function Declaration 🎯

```bash
# Basic function
greet() {
    echo "Hello, $1!"
}

# Function with return value
calculate_sum() {
    local num1=$1
    local num2=$2
    echo $((num1 + num2))
}

# Function with local variables
process_data() {
    local result=0
    # Process data
    return $result
}
```

### 2. Function Usage 🔧

```bash
# Calling functions
greet "John"

# Storing function output
sum=$(calculate_sum 5 3)

# Using return value
process_data
echo "Exit status: $?"
```

## Input and Output

### 1. User Input 📥

```bash
# Read command
read -p "Enter your name: " user_name

# Read with default value
read -p "Enter age [18]: " age
age=${age:-18}

# Read secret
read -s -p "Password: " password

# Read array
read -a colors -p "Enter colors: "
```

### 2. Output Methods 📤

```bash
# Echo statements
echo "Normal output"
echo -e "With escape sequences\n"

# Printf formatting
printf "Name: %s, Age: %d\n" "$name" "$age"

# Error output
echo "Error message" >&2

# Output redirection
echo "Log entry" >> log.txt
```

## Error Handling

### 1. Exit Codes ⚠️

```bash
# Success
exit 0

# Error
exit 1

# Check last command status
if [ $? -eq 0 ]; then
    echo "Success"
else
    echo "Failed"
fi
```

### 2. Error Trapping 🚨

```bash
# Error handling
set -e          # Exit on error
set -u          # Exit on undefined variable
set -o pipefail # Exit on pipe failure

# Trap commands
trap 'echo "Error on line $LINENO"' ERR
trap 'cleanup' EXIT
```

## Practice Examples 🎯

### 1. Basic Script
```bash
#!/bin/bash

# Simple calculator
calculate() {
    local num1=$1
    local operator=$2
    local num2=$3

    case $operator in
        "+") echo $((num1 + num2)) ;;
        "-") echo $((num1 - num2)) ;;
        "*") echo $((num1 * num2)) ;;
        "/") echo $((num1 / num2)) ;;
        *) echo "Invalid operator" ;;
    esac
}

# Get input
read -p "Enter calculation (e.g., 5 + 3): " num1 op num2

# Perform calculation
result=$(calculate $num1 "$op" $num2)
echo "Result: $result"
```

### 2. File Processing
```bash
#!/bin/bash

# Process files in directory
process_files() {
    local dir=$1
    local count=0

    for file in "$dir"/*; do
        if [ -f "$file" ]; then
            echo "Processing: $(basename "$file")"
            ((count++))
        fi
    done

    echo "Processed $count files"
}

# Get directory path
read -p "Enter directory path: " directory

# Check if directory exists
if [ -d "$directory" ]; then
    process_files "$directory"
else
    echo "Directory not found"
    exit 1
fi
```

## Best Practices 📚

1. **Script Structure**
   - Use clear shebang
   - Add descriptive comments
   - Follow consistent formatting
   - Use meaningful variable names

2. **Error Handling**
   - Check return values
   - Handle edge cases
   - Provide error messages
   - Clean up on exit

3. **Variables**
   - Quote variable references
   - Use local variables in functions
   - Initialize variables
   - Use meaningful names

4. **Documentation**
   - Add usage information
   - Document functions
   - Explain complex logic
   - Include examples

## Next Steps 🚀

- [Advanced Bash Scripting](02-advanced-bash.md)
- [Shell Script Debugging](03-debugging.md)
- [Regular Expressions](04-regex.md)
- [Script Examples](05-script-examples.md)
