pragma solidity ^0.4.6;
contract Number {

  uint   num;

  function getNum()  returns (uint n) {
     return num;
  }

   function setNum(uint n) {
      uint old = num;
      num=n;
   }

   function Number(uint x){num=x;}
}
