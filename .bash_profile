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


# Project shortcuts
export DEV="${HOME}/Development"

## Research
export RESEARCH="${HOME}/Dropbox/University/Research"

## Personal 
export DAYS="/Users/tomik/Dropbox/Development/Projects/Days/Days"

export TOMASVITEK_COM="/Users/tomik/Dropbox/Development/Projects/TomasVitek.com/Code/tomasvitek.com"
export UTILS_CZ="/Users/tomik/Dropbox/Development/Projects/Utils.cz"
export LUDMILACHARVATOVA_CZ="/Users/tomik/Dropbox/Development/Projects/Archive/2021/LudmilaCharvatova.cz/Code"

## Scouts
export SKAUTIROZTOKY_CZ="/Users/tomik/Dropbox/Development/Projects/Skauti Roztoky/Projects/SkautiRoztoky.cz/Code/skautiroztoky.cz"
export ROZTOCKE_SKAUTKY_CZ="/Users/tomik/Dropbox/Development/Projects/Skauti Roztoky/Projects/Roztocke-Skautky.cz/Code"

export ELS_WEBSITE="/Users/tomik/Dropbox/Development/Projects/ELS/Projects/Website/Code"
export ELS_SEMINAR_SIGNUP_APP="/Users/tomik/Dropbox/Development/Projects/ELS/Projects/Seminar Registration/sem"

## Clients
export SPALENY_MLYN="/Users/tomik/Dropbox/Development/Projects/Spaleny mlyn/Projects/Digital/SpalenMlyn.cz/Code"

export TINEOLA="/Users/tomik/Dropbox/Development/Projects/Archive/2021/Tineola.cz/tineola-website"
export PYT="/Users/tomik/Dropbox/Development/Projects/PYT/website"

## Kryten
export KRYTEN="${HOME}/Dropbox/Backup/Setup/Servers/Kryten"
export KRYTEN_SETUP="${HOME}/Dropbox/Backup/Setup/Servers/Kryten/config/.setup"

## Tools
export TOOLS="${HOME}/Dropbox/Development/Tools"
export DOTFILES="${HOME}/Dropbox/Development/Tools/dotfiles"
export DROPBOX_BACKUP_SERVICE="${HOME}/Dropbox/Development/Tools/dropbox-backup-service"
export MOUNT_REMOTE_FOLDER="${HOME}/Dropbox/Development/Tools/mount-remote-folder"
