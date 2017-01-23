/*
Utility Tool
Developed by Ashley Miller
*/

/* Dependencies */
const colors = require('colors');
const fs = require('fs');

/* Debug Functions */
function debugSuccess(message) {
  if (process.env.DEBUG) {
    console.log(colors.green(message));
  }
}

function debugError(message) {
  if (process.env.DEBUG) {
    console.error(colors.red(message));
  }
}

function debugWarn(message) {
  if (process.env.DEBUG) {
    console.warn(colors.yellow(message));
  }
}

// Export Debug Functions
exports.debugSuccess = debugSuccess;
exports.debugError = debugError;
exports.debugWarn = debugWarn;
