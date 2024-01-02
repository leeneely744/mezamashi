export default function () {
  let abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "newMessage",
          "type": "string"
        }
      ],
      "name": "Set",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "getMessage",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newMessage",
          "type": "string"
        }
      ],
      "name": "setMessage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
  
  let address = "0xFB7495778B895aD9F846E02AE2835Daea18BE5D1";
  let latestBlock = 0;
  
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
  
  let contract = new web3.eth.Contract(abi, address);
  contract.methods.getMessage().call().then(function (result) {
      console.log(result);
      document.getElementById("contract-result").textContent = dateText(result);
  });

  document.getElementById("button_set").onclick = () => {
    ethereum.request({ method: 'eth_requestAccounts' })
    .then((accounts) => {
      let time = Math.floor(Date.now() / 1000);
      console.log(time);
      const from_address = document.getElementById("from-address").value;
      contract.methods.setMessage(time.toString()).send({
          from: from_address
      })
      .on("receipt", function (receipt) {
          console.log(receipt);
          let blockNumber = receipt.events.Set.blockNumber;
          startEventListening(blockNumber);
      });
    });
  };

  function startEventListening(fromBlockNumber) {
    contract.events.Set({
      fromBlock: fromBlockNumber
    }, function (error, event) {
      if (error) {
        console.log(error);
      } else {
        console.log(event);
      }
    })
    .on("data", function (event) {
      console.log('event: ', event);
      document.getElementById("contract-result").textContent = dateText(event.returnValues.newMessage);
    });
  }

  function dateText(milliseconds) {
    let date = new Date(milliseconds * 1000);
    return date.toLocaleString();
  }
}
