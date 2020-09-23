const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
	if (!Array.isArray(members)) {
		return false;
	}

	let secretName = [];

	for(let member of members) {
		if (typeof(member) == 'string') {
			member = member.replace(/\s/g, '');
			secretName.push( member[0].toUpperCase() );
		}
	}

	return secretName.sort().join('');
};
