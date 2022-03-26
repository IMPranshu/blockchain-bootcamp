// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;


// This smart contracts serves 2 purposes
// 1.It stores informations
// 2. It implements behaviour
contract Token {
  string public name = "Agrawal Token";
  string public symbol = "AGRL";
  uint256 public decimals = 18;
  uint256 public totalSupply;

  // Track Balances
  // Send Tokens 

  constructor() public {
    totalSupply = 1000000 * (10** 18);
  }
}

// How to set the totalSupply??
// we can set totalSupply inside the constructor function, solidity has a special function that is called constructor which runs anytime the smart contract is deployed to the blockchain i.e. to initialize for the first time