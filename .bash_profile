# Environment
ulimit -S -n 4096

# Load SSH key passwords from Keychain
ssh-add -A 2>/dev/null;

# Brew
export PATH=/usr/local/bin:/usr/local/sbin:$PATH

# Project shortcuts
export WORK="${HOME}/Work"
export CLWK="${WORK}/Clockwork/clockwork-backend"
export RESEARCH="${HOME}/Dropbox/University/Research/Code"
export DOTFILES="${HOME}/Dropbox/Backup/Setup/macOS/dotfiles"

alias work="cd $WORK"
alias clwk="cd $CLWK"
alias research="cd $RESEARCH"
