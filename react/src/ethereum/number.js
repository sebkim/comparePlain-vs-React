import web3 from './web3';
import Number from './build/Number.json';
const addresses = require('./addresses');

const instance = new web3.eth.Contract(
  JSON.parse(Number.interface),
  addresses.number
);

export default instance;
