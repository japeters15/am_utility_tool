/*
Utility Tool
Developed by Ashley Miller
for her Deployment of Web Applications Class at Full Sail University Online
*/

/* Dependencies */

const colors = require('colors');
const fs = require('fs');

/* Debug Functions */

function debugSuccess(message) {
  if (process.env.DEBUG) {
    console.log(colors.green(message));
    fs.appendFile('./logs/log.log', message + '\n', () => {
    });
  }
}

function debugError(message) {
  if (process.env.DEBUG) {
    console.log(colors.red(message));
    fs.appendFile('./logs/log.log', message + '\n', () => {
    });
  }
}

// Export Debug Functions

exports.debugSuccess = debugSuccess;
exports.debugError = debugError;
