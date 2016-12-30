# Environment
ulimit -S -n 4096

# Load SSH key passwords from Keychain
ssh-add -A 2>/dev/null;

# Brew
export PATH=/usr/local/bin:/usr/local/sbin:$PATH

# Project shortcuts
export WORK="${HOME}/Work"
export RESEARCH="${HOME}/Dropbox/University/Research/Code"

alias work="cd $WORK"
alias research="cd $RESEARCH"
