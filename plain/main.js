"use strict";

var Web3 = require('web3');
let web3 = require('./ethereum/web3').web3;
let number = require('./ethereum/number').instance;

let accounts;
let account;

const init = async () => {
  accounts = await web3.eth.getAccounts();
  account = accounts[0];
  document.getElementById('account').innerHTML = account;
}
init();

var getNumButton = document.getElementById('getNumButton');
getNumButton.addEventListener('click', fnClickGetNum);
var setNumButton = document.getElementById('setNumButton');
setNumButton.addEventListener('click', fnClickSetNum);


async function fnClickGetNum() {
  const ret = await number.methods.getNum().call();
  document.getElementById('getNumResult').innerHTML = ret;
}

async function fnClickSetNum() {
  const setnumVal = document.getElementById('setNumInput').value;
  const setNumMessageElem= document.getElementById('setNumMessage');
  setNumMessageElem.innerHTML = 'Please wait!';
  await number.methods.setNum(setnumVal).send({
    from: account
  });
  setNumMessageElem.innerHTML = 'Done!';
}
