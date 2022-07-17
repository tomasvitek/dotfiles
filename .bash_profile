# Environment
ulimit -S -n 4096

# Load SSH key passwords from Keychain
ssh-add -A 2>/dev/null;

# Java (OpenJDK) (use `jdk 1.8` instead)
# export PATH="/usr/local/opt/openjdk/bin:$PATH"
# export CPPFLAGS="-I/usr/local/opt/openjdk/include"

# Go
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin

# Brew
export PATH=/usr/local/bin:/usr/local/sbin:$PATH

## Anaconda
# conda config --set auto_activate_base false

# added by Anaconda3, but to use run `conda_init`
export PATH="/Users/tomik/anaconda3/bin:$PATH"

# Android SDK (make sure Android Studio is installed!)
export ANDROID_HOME=/Users/$USER/Library/Android/sdk
export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator:$ANDROID_HOME/cmdline-tools/latest/bin

# .bash_profile secret export
if [ -f $HOME/.bash_profile.secret ]; then
    source $HOME/.bash_profile.secret
fi

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/tomik/anaconda3/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/tomik/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/Users/tomik/anaconda3/etc/profile.d/conda.sh"
    else
        export PATH="/Users/tomik/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<

