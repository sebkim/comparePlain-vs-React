const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiled = require('./build/Number.json');

const provider = new HDWalletProvider(
  '{your 12 words mnemonic words seperated by space}',
  'https://rinkeby.infura.io/G6jiWFDK2hiEfZVJG8w1'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);
  console.log("");

  let result = await new web3.eth.Contract(
    JSON.parse(compiled.interface)
  )
    .deploy({ data: compiled.bytecode, arguments: [11] })
    .send({ gasPrice: '200000000000', gas: '6000000', from: accounts[0] });
  console.log('Contract deployed to', result.options.address);

};

deploy();
