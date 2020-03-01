# Environment
ulimit -S -n 4096

# Load SSH key passwords from Keychain
ssh-add -A 2>/dev/null;

# Go

export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin

# Brew
export PATH=/usr/local/bin:/usr/local/sbin:$PATH

# added by Anaconda3, but to use run `conda_init`
export PATH="/Users/tomik/anaconda3/bin:$PATH"

# Project shortcuts
export DEV="${HOME}/Development"
export RESEARCH="${HOME}/Dropbox/University/Research/Code"
export TOOLS="${HOME}/Dropbox/Backup/Setup/macOS/Tools"
export DOTFILES="${HOME}/Dropbox/Backup/Setup/macOS/Tools/dotfiles"
export KRYTEN="${HOME}/Dropbox/Backup/Setup/Servers/Kryten Server @London"