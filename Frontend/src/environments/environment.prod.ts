
import { env } from './.env';

export const environment = {
  production: true,
  hmr: true,
  version: env.npm_package_version + '-dev',
  serverUrl: 'http://193.136.62.214/api/api/',
  serverUrlNotification: 'http://193.136.62.214/api/pc4mthub/'  
};
