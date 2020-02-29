# Environment
ulimit -S -n 4096

# Load SSH key passwords from Keychain
ssh-add -A 2>/dev/null;

# Load GPG key password from Keychain for commit signing
# https://gist.github.com/bmhatfield/cc21ec0a3a2df963bffa3c1f884b676b
if [ -f ~/.gnupg/.gpg-agent-info ] && [ -n "$(pgrep gpg-agent)" ]; then
    source ~/.gnupg/.gpg-agent-info
    export GPG_AGENT_INFO
else
    eval $(gpg-agent --daemon --write-env-file ~/.gnupg/.gpg-agent-info)
fi

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
