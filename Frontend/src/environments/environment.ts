import { env } from './.env';

export const environment = {
  production: false,
  hmr: true,
  version: env.npm_package_version + '-dev',
  serverUrl: 'https://localhost:44350/api/',
  serverUrlNotification: 'https://localhost:44350/pc4mthub/',
  defaultLanguage: 'pt-PT',
  supportedLanguages: ['pt-PT'],
};
//https://localhost:44350/swagger/index.html

//serverUrl: 'https://localhost:44350/api/',
 // serverUrlNotification: 'https://localhost:44350/pc4mthub/',


