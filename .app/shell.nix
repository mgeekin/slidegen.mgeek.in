{ pkgs ? import <nixpkgs> {} }:
# { pkgs ? import (fetchTarball  "https://github.com/NixOS/nixpkgs/tarball/nixos-23.11") {} }:
let
  message = "Lets Start Development";
in 
pkgs.mkShell {
  buildInputs = with pkgs; [ python3 pipenv ];

  packages = with pkgs; [
    python3 
    pipenv
    vim 
    curl     
    vscodium
  ];

  shellHook = ''
	echo -e "pipenv install\n"
	pipenv -h
	pipenv update
	echo -e "pipenv install eel pyinstaller"
	pipenv install eel pyinstaller
	pipenv run python3 eelserver.py
	'';
}
