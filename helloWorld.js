export default function () {
    var abi = [
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
  
    var address = "0xFB7495778B895aD9F846E02AE2835Daea18BE5D1";
  
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
  
    var contract = new web3.eth.Contract(abi, address);
    contract.methods.getMessage().call().then(function (result) {
        console.log(result);
        document.getElementById("contract-result").textContent = result;
    });
    
    // var eventContract = new web3.eth.Contract(abi, address);
    // eventContract.events.Set({})
    // .on('data', function(event){
    //   console.log("event callback.");
    //   document.getElementById("contract-result").textContent = event.returnValues.newWord;
    // })
    // .on('error', console.error);

    // document.getElementById("button_set").onclick = () => {
    //     let time = Math.floor(Date.now() / 1000);
    //     console.log(time);
    //     contract.methods.setMessage(time.toString(), function (err, res) {
    //         console.log(res);
    //     }
    // )};
  }