#!/usr/bin/env bash

cd "$(dirname "${BASH_SOURCE}")";

git pull origin master;
git submodule update --init --recursive
git submodule foreach --recursive git fetch
git submodule foreach git merge origin master

function doBootstrap() {
	rsync --exclude ".git/" \
		--exclude ".DS_Store" \
		--exclude "bootstrap.sh" \
		--exclude "update.sh" \
		--exclude "README.md" \
		--exclude "LICENSE.md" \
		-avh --no-perms --update . ~;
	source ~/.bash_profile;
}

if [ "$1" == "--force" -o "$1" == "-f" ]; then
	doBootstrap;
else
	read -p "This may overwrite existing files in your home directory. Are you sure? (y/n) " -n 1;
	echo "";
	if [[ $REPLY =~ ^[Yy]$ ]]; then
		doBootstrap;
	fi;
fi;
unset doBootstrap;