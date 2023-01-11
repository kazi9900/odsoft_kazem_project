"use strict";
exports.__esModule = true;
exports.environment = void 0;
var _env_1 = require("./.env");
exports.environment = {
    production: false,
    hmr: true,
    version: _env_1.env.npm_package_version + '-dev',
    serverUrl: 'https://localhost:44350/api/',
    serverUrlNotification: 'https://localhost:44350/pc4mthub/',
    defaultLanguage: 'pt-PT',
    supportedLanguages: ['pt-PT']
};
