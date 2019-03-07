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

# added by Anaconda3 5.3.0 installer
# >>> conda init >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$(CONDA_REPORT_ERRORS=false '/Users/tomik/anaconda3/bin/conda' shell.bash hook 2> /dev/null)"
if [ $? -eq 0 ]; then
    \eval "$__conda_setup"
else
    if [ -f "/Users/tomik/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/Users/tomik/anaconda3/etc/profile.d/conda.sh"
        CONDA_CHANGEPS1=false conda activate base
    else
        \export PATH="/Users/tomik/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda init <<<
