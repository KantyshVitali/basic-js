const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
	constructor(typeOfCiphering = true) {
		this.typeOfCiphering = typeOfCiphering;
	}

	icreaseKey(key, length) {
		if(key.length <= length) {
			let longKey = key.slice();
			for(let i = key.length - 1, j = 0; i < length; i++, j++ ) {
				if(j === key.length ) {
					j = 0;
				}
				longKey += key[j];
			}
			return longKey;
		} else {
			let shortKey = '';
			for (let i = 0; i < length + 1 ; i++ ) {
				shortKey += key[i];
			}
			return shortKey;
		}
	}

	encrypt(message, key) {
		key = this.icreaseKey(key, message.length - 1);
		key = key.toUpperCase();
		message = message.toUpperCase();
		let result = '';

		for (let i = 0, j = 0; i < message.length;j++, i++) {
			if(message.charCodeAt(i) > 90 || message.charCodeAt(i) < 65) {
				result += message[i];
				j--;
			}
			else {
				let code = (message.charCodeAt(i) - 65) + (key.charCodeAt(j) - 65);
				if(code > 25) {
					code = code - 26;
				} 
				result += String.fromCharCode(code + 65);
			}
		}
		return (this.typeOfCiphering) ? result: result.split('').reverse().join('');
	}

	decrypt(message, key) {
		key = this.icreaseKey(key, message.length - 1);
		key = key.toUpperCase();
		message = message.toUpperCase();
		let result = '';

		for (let i = 0, j = 0; i < message.length;j++, i++) {
			if(message.charCodeAt(i) > 90 || message.charCodeAt(i) < 65) {
				result += message[i];
				j--;
			}
			else {
				let code = (message.charCodeAt(i) - 65) - (key.charCodeAt(j) - 65);
				
				if(code > 25) {
					code = code - 26;
				}
				if(code < 0) {
					code = 26 + code;
				} 
				
				result += String.fromCharCode(code + 65);
			}
		}

		return (this.typeOfCiphering) ? result: result.split('').reverse().join('');
	}
}

module.exports = VigenereCipheringMachine;
