# Panther
**A Professional Cybersecurity Scripting Language**

 
**Blazing fast**

**Single Standalone Executable**

# What is Panther?

Panther is a high-performance scripting language designed specifically for:

Penetration Testing

OSINT Gathering

Network Reconnaissance

Security Auditing

Password Intelligence

Built in Go, Panther compiles to native machine code and delivers 5–10x faster execution than equivalent Python scripts.

No pip installs. No dependency hell. Just one executable.

# Quick Example
var target = "example.com";

Print("Scanning " + target);

Dns_Lookup(target);

Scan_Port("8.8.8.8", 80);

Run:

./panther script.pnr
# Key Features

~ 50 built in security commands

Variables & Control Structures

Cross-Platform Support (Windows & Linux)

JSON / TXT / HTML Reporting

Interactive Shell Mode

Native Performance

# Installation
Download Release

Grab the executable from Releases.

Build From Source

git clone https://github.com/CzaxStudio/panther

cd panther

go build -ldflags="-s -w" -trimpath -o panther Panther.go

# Ethical Use

Panther is intended for:

Authorized security testing

Educational purposes

Research environments

Unauthorized use is strictly discouraged.

# License

MIT License
