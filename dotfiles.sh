#!/usr/bin/env bash

# This script can bootstrap or backup
# dotfiles into/from the current home directory

function doBootstrap() {
	cd "$(dirname "${BASH_SOURCE}")";

	echo "upgrading your oh-my-zsh installation..."

	env ZSH="$(dirname "${BASH_SOURCE}")/.oh-my-zsh" sh "$(dirname "${BASH_SOURCE}")/.oh-my-zsh/tools/upgrade.sh"
	command rm -rf "$ZSH/log/update.lock"

	echo "done."
	echo ""

	echo "upgrading your dottools and oh-my-zsh plugins..."

	git pull
	git submodule update --init --recursive
	git submodule foreach --recursive git fetch
	git submodule foreach git merge origin master

	rsync --include ".oh-my-zsh/.git" \
		--exclude ".git/" \
		--exclude ".DS_Store" \
		--exclude "todo" \
		--exclude "dotfiles.sh" \
		--exclude ".gitmodules" \
		--exclude "README.md" \
		--exclude "LICENSE.md" \
		--owner \
		--group \
        -avh --no-perms --update ./ ~/


	# currently doesn't work
	# check https://github.com/blacktop/lporg before re-enabling 

	# lporg load ~/.launchpad.yaml

	echo "done."
	echo ""

	echo ""
	echo "dotfiles loaded into your home directory."
	source ~/.bash_profile
}

function doBackup() {
	cd "$(dirname "${BASH_SOURCE}")";
	
	# currently doesn't work
	# check https://github.com/blacktop/lporg before re-enabling 

	# lporg save;	

  	rsync --exclude ".oh-my-zsh/" \
		--exclude ".git/" \
		--exclude ".DS_Store" \
		--exclude "dotfiles.sh" \
		--exclude "README.md" \
		--exclude "LICENSE.md" \
		\
		--exclude "Applications" \
		--exclude "Desktop" \
		--exclude "Documents" \
		--exclude "Downloads" \
		--exclude "Dropbox" \
		--exclude "Library" \
		--exclude "Movies" \
		--exclude "Music" \
		--exclude "Pictures" \
		--exclude "Public" \
		--exclude "Trash" \
		--exclude ".Trash" \
		--exclude "Development" \
		--exclude "Basecamp" \
		--exclude "VirtualBox VMs" \
		--exclude "Pro Lidku" \
		
		\
		-avh --no-perms --existing ~/ ./;

	echo .
	echo "Current dotfiles saved, you may commit changes."
}

case $1 in
    "bootstrap")
    	if [ "$2" == "--force" -o "$2" == "-f" ]; then
			doBootstrap
		else
			read -p "This may overwrite existing files in your home directory. Are you sure? (y/n) " -n 1;
			echo ""
			if [[ $REPLY =~ ^[Yy]$ ]]; then
				doBootstrap
			fi
		fi
		;;
    "backup")
    	doBackup ;;
	*)
		echo "usage: ./dotfiles.sh bootstrap | backup"
		exit 1
		;;
esac

unset doBootstrap;
unset doBackup;
