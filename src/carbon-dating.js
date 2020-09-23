const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	let radioactiveDecay = 0.693 / HALF_LIFE_PERIOD;
	
	return (typeof(sampleActivity) === 'string' &&
	 +sampleActivity <= 15 && +sampleActivity > 0)
	 ? Math.ceil( Math.log(MODERN_ACTIVITY / +sampleActivity)
	  / radioactiveDecay ) : false;
};
