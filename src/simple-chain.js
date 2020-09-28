const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result : [],  
  getLength() {
    return this.result.join('~~').length;
  },
  addLink(value) {    
    this.result.push(`( ${String(value)} )`);

    return this;
  },
  removeLink(position) {   
    if(!(Number.isInteger(position) && position <= this.result.length && position >= 1) ) {
      this.result = [];
      throw Error('hello');
        
    } 
    this.result.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.result = this.result.reverse();

    return this;
  },
  finishChain() {
    let newChain = this.result.slice(0);    
    this.result = [];
    return newChain.join('~~');
  }
};

module.exports = chainMaker;
