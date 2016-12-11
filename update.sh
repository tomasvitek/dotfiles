#!/usr/bin/env bash

cd "$(dirname "${BASH_SOURCE}")";

function doUpdate() {
	rsync -avh --no-perms --existing . ~;
	source ~/.bash_profile;
}

doUpdate;
unset doUpdate;