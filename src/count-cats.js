const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {  
  // remove line with error and write your code here
	let countEars = 0;

	for(let array of backyard) {
		for (let ears of array) {
			if(ears === '^^') {
				countEars++;
			}
		}
	}

	return countEars;
};
