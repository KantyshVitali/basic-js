const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	if (!Array.isArray(arr)) {
		throw Error('');
	}

	let transformArray = arr.slice(0);

	for (let i = 0; i < arr.length; i++) {
		if (transformArray[i] === '--discard-next' ) {     
      if(i == transformArray.length - 1) {
        transformArray[i] = '--deleted--';
      }else {
        transformArray[i] = '--deleted--';
        transformArray[i + 1] = '--deleted--';
      }
		} else 
		if (transformArray[i] === '--discard-prev' ) {
      if(i == 0) {
        transformArray[i] = '--deleted--';
      }else {
        transformArray[i] = '--deleted--';
        transformArray[i - 1] = '--deleted--';
      }
      
		} else 
		if (transformArray[i] === '--double-next' ) {
       if(i == arr.length - 1) {
         transformArray[i] = '--deleted--';
      }else {
        transformArray[i] = arr[i + 1];
      }
      
		} else
		if (transformArray[i] === '--double-prev' ) {
      if(i == 0) {
        transformArray[i] = '--deleted--';
      }else {
        transformArray[i] = transformArray[i - 1];
      }
        
        
		} else {
      // transformArray[i] = arr[i];
    }
	}

  for(let i = 0; i < transformArray.length; i++) {
    if(transformArray[i] === '--deleted--') {
      transformArray.splice(i, 1);
      i--;
    }
  }

	return transformArray;
};