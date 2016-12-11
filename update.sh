#!/usr/bin/env bash

cd "$(dirname "${BASH_SOURCE}")";

function doUpdate() {
	rsync --exclude ".git/" \
		--exclude ".DS_Store" \
		--exclude "bootstrap.sh" \
		--exclude "update.sh" \
		--exclude "README.md" \
		--exclude "LICENSE.md" \
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
		--exclude "Work" \
		-avh --no-perms --existing . ~;
	source ~/.bash_profile;
}

doUpdate;
unset doUpdate;