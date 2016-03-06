 "use strict";

const OptionParser = require('option-parser');
const exec = require('child_process').exec;
const parser = new OptionParser();

let command = 'npm run start-clean';
let env = {
  APPDATA: ".", // Odd but seems to be required for Windows
  NODE_ENV: "production",
  ASSETS_LOCATION: ""
};

parser.addOption('h', 'help', 'Display this help message')
  .action(parser.helpAction());

parser.addOption('d', 'dev', 'Run as development. By default it will run as production.')
  .action(() => {
    env.NODE_ENV = 'development';
  });

parser.parse();

// Handle development case
if (env.NODE_ENV === 'development') {
  command = 'npm run start-dev';
  env.ASSETS_LOCATION = 'http://localhost:8080';
}

require('child_process').execSync(command, {env:env,stdio:[0,1,2]});
