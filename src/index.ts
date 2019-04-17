import { AcuaApplication } from './application';
import { ApplicationConfig } from '@loopback/core';
const cfenv = require('cfenv');
const appEnv = cfenv.getAppEnv();

export { AcuaApplication };

export async function main(options: ApplicationConfig = {}) {
  // Set the port assined for the app
  if (!options) options = {};
  if (!options.rest) options.rest = {};
  options.rest.port = appEnv.isLocal ? options.rest.port : appEnv.port;
  options.rest.host = appEnv.isLocal ? options.rest.host : appEnv.host;

  const app = new AcuaApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
