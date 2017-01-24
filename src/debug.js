/*
Utility Tool
Developed by Ashley Miller
for her Deployment of Web Applications Class at Full Sail University Online
*/

/* Dependencies */
const colors = require('colors');
const fs = require('fs');

//bump versions
function _bump(currentSemVersion, typeofIncrement){

  //Major [0]
  //Minor [1]
  //Patch [2]
  const aryVersions = currentSemVersion.split('.');

  for(let versionIndex in aryVersions){
    aryVersions[versionIndex] = parseInt(aryVersions[versionIndex]);
  }

  if(typesofIncrement === 'patch'){
    aryVersions[2] += 1; //patch
  } else if(typesofIncrement === 'minor'){
    aryVersions[2] = 0; //patch
    aryVersions[1] += 1; //minor
  } else if(typesofIncrement === 'major'){
    aryVersions[2] = 0; //patch
    aryVersions[1] = 0; //minor
    aryVersions[0] += 1; //minor
  }

  return aryVersions.join('.');
}


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
