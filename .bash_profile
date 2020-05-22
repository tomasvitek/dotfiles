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

# added by Anaconda3, but to use run `conda_init`
export PATH="/Users/tomik/anaconda3/bin:$PATH"

# Android SDK (make sure Android Studio is installed!)
export ANDROID_HOME=/Users/$USER/Library/Android/sdk
export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools

# Project shortcuts
export DEV="${HOME}/Development"
export RESEARCH="${HOME}/Dropbox/University/Research/Code"

export KRYTEN="${HOME}/Dropbox/Backup/Setup/Servers/Kryten Server @London"

export TOOLS="${HOME}/Dropbox/Backup/Setup/macOS/Tools"
export DOTFILES="${HOME}/Dropbox/Backup/Setup/macOS/Tools/dotfiles"
export DROPBOX_BACKUP_SERVICE="${HOME}/Dropbox/Backup/Setup/macOS/Tools/dropbox-backup-service"
export MOUNT_REMOTE_FOLDER="${HOME}/Dropbox/Backup/Setup/macOS/Tools/mount-remote-folder"
