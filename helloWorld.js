export default function () {
    var abi = [
        {
            "constant": true,
            "inputs": [],
            "name": "getMessage",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        }
    ];
  
    var address = "0x13616FAE16A6f272042422a9710242385993C608";
  
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
  
    var contract = new web3.eth.Contract(abi, address);
    contract.methods.getMessage().call(function (err, res) {
      document.getElementById("contract-result").textContent = res;
      console.log(res);
    });
  }