"use strict"

const os = require("os");
const path = require("path");

exports.CAPABILITY_DIRECTORY_PATH = path.normalize(path.join(os.homedir(), ".capability"));
exports.CAPABILITY_CONFIG_PATH = path.normalize(path.join(exports.CAPABILITY_DIRECTORY_PATH, "config"));
exports.CAPABILITY_CONFIG_LOCKFILE_PATH = `${exports.CAPABILITY_CONFIG_PATH}.lock`;
exports.CAPABILITY_CREDENTIALS_PATH = path.normalize(path.join(exports.CAPABILITY_DIRECTORY_PATH, "credentials"));
exports.CAPABILITY_CREDENTIALS_LOCKFILE_PATH = `${exports.CAPABILITY_CREDENTIALS_PATH}.lock`;
