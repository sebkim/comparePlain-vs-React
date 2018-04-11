
const web3 = require('./web3').web3;
const Number = require('./build/Number.json');
const addresses = require('./addresses');

const instance = new web3.eth.Contract(
  JSON.parse(Number.interface),
  addresses.number
);

module.exports = {
  instance
};
