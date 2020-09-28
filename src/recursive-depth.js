const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	constructor() {
		this.depth = 1;
		this.set = [1];
	}
	calculateDepth(arr , depth = 1, set = [1]) {
			arr.forEach((element) => {
				if(Array.isArray(element)) {
					set.push(depth + 1);
					this.calculateDepth(element, depth + 1, set);
				}
			});
			return Math.max.apply(null, set);
	}
};