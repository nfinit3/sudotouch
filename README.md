[![passworth cli](https://github.com/nfinit3/sudotouch/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/nfinit3/-sudotouch/actions/workflows/npm-publish.yml)
![NPM](https://img.shields.io/npm/l/sudotouch)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/sudotouch)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/nfinit3/sudotouch)
![GitHub repo size](https://img.shields.io/github/repo-size/nfinit3/sudotouch)
![npm](https://img.shields.io/npm/dw/sudotouch)


# SudoTouch

The sudotouch package is a command line utility for enabling TouchID on macOS terminals. This package provides a convenient and efficient way to use biometric authentication for sudo commands, improving security and productivity for macOS users.

## Installation

To install the package, run the following command:

```bash
npm install -g sudotouch
```

## Prerequisites

* macOS
* Node.js installed
* `sudo` privileges

## Usage

To enable TouchID for `sudo` commands, simply run the following command in your terminal:

```bash
sudotouch
```

If TouchID is not already enabled, the package will automatically add the pam_tid.so authentication module to the sudo configuration file, and enable TouchID for sudo commands. If TouchID is already enabled, the package will print a message indicating that it is already enabled.

> Note: This package requires sudo privileges to modify the sudo configuration file. You will be prompted to enter your password when running the sudotouch command.

## License

This repository is released under the _MIT License_.
