# Regular Expressions in Linux 🔍

## Basic Regex Patterns

### 1. Character Classes 📝

| Pattern | Description | Example |
|---------|-------------|---------|
| `.` | Any single character | `c.t` matches "cat", "cut" |
| `[abc]` | Any character in set | `[aeiou]` matches any vowel |
| `[^abc]` | Any character not in set | `[^0-9]` matches non-digits |
| `[a-z]` | Character range | `[a-z]` matches lowercase letters |
| `\w` | Word character [a-zA-Z0-9_] | `\w+` matches words |
| `\d` | Digit [0-9] | `\d{3}` matches 3 digits |
| `\s` | Whitespace | `\s+` matches spaces |

### 2. Quantifiers 🔢

| Pattern | Description | Example |
|---------|-------------|---------|
| `*` | Zero or more | `ab*` matches "a", "ab", "abb" |
| `+` | One or more | `ab+` matches "ab", "abb" |
| `?` | Zero or one | `ab?` matches "a", "ab" |
| `{n}` | Exactly n times | `a{3}` matches "aaa" |
| `{n,}` | n or more times | `a{2,}` matches "aa", "aaa" |
| `{n,m}` | Between n and m times | `a{2,4}` matches "aa", "aaa", "aaaa" |

## Advanced Patterns

### 1. Anchors and Boundaries 📌

```bash
# Line anchors
^pattern    # Start of line
pattern$    # End of line
^$          # Empty line

# Word boundaries
\bword\b    # Complete word
\Bpattern   # Not at word boundary

# Examples
grep "^#"           # Lines starting with #
grep "error$"       # Lines ending with error
grep "\bthe\b"      # Match "the" as a word
```

### 2. Groups and References 🔄

```bash
# Grouping
(pattern)     # Capture group
(?:pattern)   # Non-capturing group
\1, \2        # Back references

# Examples
sed 's/(foo).*\1/\1/'    # Match repeated word
grep -E '(ab)+c'         # Match repeated 'ab'
```

## Regex Tools

### 1. grep and Family 🔎

```bash
# Basic grep
grep "pattern" file.txt
grep -i "case-insensitive" file.txt
grep -v "exclude" file.txt

# Extended grep
grep -E "regex|pattern" file.txt
egrep "regex|pattern" file.txt

# Recursive search
grep -r "pattern" directory/
grep -l "pattern" *.txt    # List matching files
```

### 2. sed (Stream Editor) ✂️

```bash
# Basic substitution
sed 's/old/new/' file.txt
sed 's/old/new/g' file.txt    # Global replace

# Multiple commands
sed -e 's/this/that/g' -e 's/here/there/g' file.txt

# Using capture groups
sed 's/(\w+) \1/\1/g'    # Remove repeated words
```

### 3. awk Text Processing 📊

```bash
# Pattern matching
awk '/pattern/ {print}' file.txt
awk '$1 ~ /^[0-9]+$/' file.txt

# Field processing
awk '$1 == "string" {print $2}' file.txt
awk -F: '{print $1}' /etc/passwd
```

## Common Use Cases

### 1. Text Validation 📋

```bash
# Email validation
email_regex='^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
if [[ $email =~ $email_regex ]]; then
    echo "Valid email"
fi

# IP address validation
ip_regex='^([0-9]{1,3}\.){3}[0-9]{1,3}$'
if [[ $ip =~ $ip_regex ]]; then
    echo "Valid IP format"
fi

# Date validation (YYYY-MM-DD)
date_regex='^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$'
if [[ $date =~ $date_regex ]]; then
    echo "Valid date format"
fi
```

### 2. Log Processing 📝

```bash
# Extract IP addresses
grep -oE '\b([0-9]{1,3}\.){3}[0-9]{1,3}\b' access.log

# Find error messages
grep -i 'error\|failed\|warning' error.log

# Parse Apache logs
awk '$9 == 404 {print $7}' access.log    # List 404 URLs
```

## Practice Examples 🎯

### 1. Log Analysis Script
```bash
#!/bin/bash

# Analyze log file for patterns
analyze_log() {
    local log_file=$1
    
    echo "=== Log Analysis ==="
    echo "Error count:"
    grep -ci 'error' "$log_file"
    
    echo -e "\nUnique IP addresses:"
    grep -oE '\b([0-9]{1,3}\.){3}[0-9]{1,3}\b' "$log_file" | sort -u
    
    echo -e "\nTop 5 URLs:"
    grep -oE 'GET /[^ ]+' "$log_file" | sort | uniq -c | sort -rn | head -5
}

# Usage
analyze_log "access.log"
```

### 2. Data Validation Script
```bash
#!/bin/bash

# Validation patterns
PATTERNS=(
    ["email"]='^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    ["phone"]='^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$'
    ["url"]='^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$'
)

# Validate input
validate() {
    local type=$1
    local input=$2
    local pattern=${PATTERNS[$type]}
    
    if [[ -z $pattern ]]; then
        echo "Unknown validation type"
        return 1
    fi
    
    if [[ $input =~ $pattern ]]; then
        echo "Valid $type"
        return 0
    else
        echo "Invalid $type"
        return 1
    fi
}

# Example usage
validate "email" "user@example.com"
validate "phone" "123-456-7890"
validate "url" "https://example.com"
```

## Best Practices 📚

1. **Pattern Building**
   - Start simple
   - Test incrementally
   - Use capture groups
   - Consider boundaries

2. **Performance**
   - Avoid excessive backtracking
   - Use appropriate tools
   - Optimize patterns
   - Consider alternatives

3. **Maintainability**
   - Document patterns
   - Use variables
   - Break down complex patterns
   - Test edge cases

4. **Security**
   - Validate input
   - Escape special characters
   - Set limits
   - Handle errors

## Next Steps 🚀

- [Script Examples](05-script-examples.md)
- [Advanced Bash](02-advanced-bash.md)
- [Shell Debugging](03-debugging.md)
- [Text Processing](../text/01-text-processing.md)
