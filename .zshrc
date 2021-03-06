# Path to your oh-my-zsh configuration.
ZSH=$HOME/.oh-my-zsh

# Path to custom folder
ZSH_CUSTOM=$HOME/.zsh-custom

# Tomorrow theme by sainaen
# https://github.com/sainaen/dotfiles
ZSH_THEME="tomorrow"

COMPLETION_WAITING_DOTS="true"

# Plugins
# previously used plugins: autojump
plugins=(gitfast zsh-syntax-highlighting zsh-autosuggestions)

ZSH_HIGHLIGHT_HIGHLIGHTERS=(main brackets)

DISABLE_UNTRACKED_FILES_DIRTY="true"

# Oh my zsh export
source $ZSH/oh-my-zsh.sh

# Functions export
source $HOME/.functions

# Aliases export
source $HOME/.aliases

# Use fancy ZSH completion
zstyle ':completion:*' expand prefix suffix

export EDITOR="edit"
