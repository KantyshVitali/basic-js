const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options = {} ) {
  
  if(options.addition === null) {
    options.addition = 'null';
  }
  if(options.separator === undefined) {
    options.separator = '+';
  }
  if(options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  if(options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
   if(options.additionRepeatTimes  === undefined) {
    options.additionRepeatTimes = 1;
  }
  if(options.addition != undefined) {
    let additionArray = [];
    for(let i = 0; i < options.additionRepeatTimes; i++ ) {
      additionArray.push(options.addition);
    }
    str += additionArray.join(options.additionSeparator);
  } 
  
   
	let resultArray = [];
  for(let i = 0; i < options.repeatTimes; i++  ) {
    resultArray.push(str);
  }
  return resultArray.join(options.separator);
};
