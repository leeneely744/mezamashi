// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Dealing {
  // This is `storage` variable. It's stored on the blockchain.
  // So gas cost is required when you read/write this variable.
  string message;

  event Set(address sender, string newMessage);

  constructor() {
    message = "Hello World!";
  }

  function getMessage() public view returns (string memory) {
    return message;
  }

  function setMessage(string memory newMessage) public {
    message = newMessage;
    emit Set(msg.sender, newMessage);
  }
}
