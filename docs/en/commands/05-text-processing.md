# Text Processing Commands 📝

## Basic Text Tools

### 1. Text Viewing 👀

| Command | Description | Example |
|---------|-------------|---------|
| `cat` | Display file content | `cat file.txt` |
| `less` | Page through text | `less large_file.txt` |
| `head` | Show first lines | `head -n 10 file.txt` |
| `tail` | Show last lines | `tail -f log.txt` |
| `more` | Basic text pager | `more file.txt` |

### 2. Text Searching 🔍

| Command | Description | Example |
|---------|-------------|---------|
| `grep` | Search text patterns | `grep "pattern" file.txt` |
| `egrep` | Extended grep | `egrep "pattern1|pattern2" file.txt` |
| `fgrep` | Fixed strings grep | `fgrep "exact string" file.txt` |
| `rg` | Recursive grep (ripgrep) | `rg "pattern" directory/` |
| `ag` | The silver searcher | `ag "pattern" directory/` |

## Text Manipulation

### 1. Basic Text Operations ✂️

| Command | Description | Example |
|---------|-------------|---------|
| `cut` | Extract columns | `cut -d"," -f1 data.csv` |
| `paste` | Merge lines | `paste file1 file2` |
| `tr` | Translate characters | `tr 'a-z' 'A-Z' < file.txt` |
| `sort` | Sort lines | `sort -n numbers.txt` |
| `uniq` | Remove duplicates | `sort file.txt \| uniq` |

### 2. Advanced Text Processing 🔧

| Command | Description | Example |
|---------|-------------|---------|
| `sed` | Stream editor | `sed 's/old/new/g' file.txt` |
| `awk` | Pattern scanning | `awk '{print $1}' file.txt` |
| `perl` | Perl processing | `perl -pe 's/old/new/g' file.txt` |
| `xargs` | Build command lines | `find . -name "*.txt" \| xargs grep "pattern"` |
| `fmt` | Format text | `fmt -w 80 file.txt` |

## Regular Expressions

### 1. Basic Patterns 📋

```bash
.       # Any single character
^       # Start of line
$       # End of line
*       # Zero or more occurrences
+       # One or more occurrences
?       # Zero or one occurrence
[]      # Character class
[^]     # Negated character class
```

### 2. Extended Patterns 🎯

```bash
\d      # Digit [0-9]
\w      # Word character [a-zA-Z0-9_]
\s      # Whitespace
\b      # Word boundary
()      # Grouping
|       # Alternation
{n}     # Exactly n times
{n,m}   # n to m times
```

## File Parsing

### 1. Column Operations 📊

| Command | Description | Example |
|---------|-------------|---------|
| `cut` | Extract columns | `cut -d"," -f1,3 data.csv` |
| `column` | Columnate text | `column -t data.txt` |
| `join` | Join files on field | `join file1 file2` |
| `csvkit` | CSV processing tools | `csvcut -c 1,3 data.csv` |
| `jq` | JSON processor | `jq '.field' data.json` |

### 2. Data Extraction 📈

| Command | Description | Example |
|---------|-------------|---------|
| `awk` | Field processing | `awk -F',' '{sum+=$1} END {print sum}' data.csv` |
| `sed` | Pattern extraction | `sed -n 's/.*<title>\(.*\)<\/title>.*/\1/p'` |
| `grep` | Pattern matching | `grep -o "pattern" file.txt` |
| `perl` | Complex processing | `perl -ne 'print if /pattern/'` |
| `xml` | XML processing | `xmlstarlet sel -t -v "//path" file.xml` |

## Text Formatting

### 1. Text Layout 📑

| Command | Description | Example |
|---------|-------------|---------|
| `fmt` | Format text width | `fmt -w 60 file.txt` |
| `fold` | Wrap text | `fold -w 80 file.txt` |
| `pr` | Format for printing | `pr -l 60 file.txt` |
| `expand` | Convert tabs to spaces | `expand file.txt` |
| `unexpand` | Convert spaces to tabs | `unexpand file.txt` |

### 2. Text Conversion 🔄

| Command | Description | Example |
|---------|-------------|---------|
| `iconv` | Convert character sets | `iconv -f UTF-8 -t ASCII file.txt` |
| `dos2unix` | Convert line endings | `dos2unix file.txt` |
| `unix2dos` | Convert to DOS format | `unix2dos file.txt` |
| `recode` | Convert file encoding | `recode UTF-8..ASCII file.txt` |
| `pandoc` | Convert document formats | `pandoc -f md -t html file.md` |

## Practice Examples 🎯

### 1. Text Search and Replace
```bash
# Find all occurrences
grep -r "pattern" directory/

# Replace in multiple files
find . -type f -name "*.txt" -exec sed -i 's/old/new/g' {} +

# Count occurrences
grep -c "pattern" file.txt
```

### 2. Data Processing
```bash
# Calculate column sum
awk -F',' '{sum+=$1} END {print sum}' data.csv

# Extract specific fields
cut -d',' -f1,3 data.csv | sort | uniq -c

# Process JSON data
cat data.json | jq '.items[] | select(.field=="value")'
```

### 3. File Formatting
```bash
# Format text file
fmt -w 80 input.txt > output.txt

# Convert encoding
iconv -f ISO-8859-1 -t UTF-8 input.txt > output.txt

# Create columnar output
ls -l | column -t
```

## Advanced Examples 🚀

### 1. Complex Text Processing
```bash
# Extract emails from text
grep -E -o "\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b" file.txt

# Process structured logs
awk '/ERROR/ {print $1, $2, $NF}' logfile.txt

# Multiple replacements
sed -e 's/old1/new1/g' -e 's/old2/new2/g' file.txt
```

### 2. Data Analysis
```bash
# Calculate statistics
awk '{sum+=$1; sumsq+=$1*$1} END {print "Mean =", sum/NR; print "Stddev =", sqrt(sumsq/NR - (sum/NR)**2)}' data.txt

# Find duplicate lines
sort file.txt | uniq -d

# Process CSV with headers
awk -F',' 'NR==1{for(i=1;i<=NF;i++)header[i]=$i;next} {for(i=1;i<=NF;i++)print header[i]": "$i}' data.csv
```

## Best Practices 📚

1. **Text Processing**
   - Use appropriate tools for the task
   - Consider character encoding
   - Handle special characters properly
   - Use proper quoting in scripts

2. **Performance**
   - Use efficient tools for large files
   - Consider memory usage
   - Use streaming where possible
   - Avoid unnecessary processing

3. **Maintenance**
   - Document complex commands
   - Use version control for scripts
   - Test on sample data first
   - Keep backups before bulk changes

## Next Steps 🚀

- [Package Management](06-package.md)
- [Security Commands](07-security.md)
- [Performance Monitoring](08-performance.md)
- [Shell Scripting](../scripting/01-bash-basics.md)
