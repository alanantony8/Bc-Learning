import Web3 from 'web3';

const web3 = new Web3('https://goerli.infura.io/v3/9150e475a8db482385b9467700ff0946');

const fromAddress = '0x659098cDb252aa12dFA4f9438eF6AC4E56ea77C1';
const toAddress = '0x38EF27640e1CEd0A10d3501a82C2Ed64336a22Bf';
const amount = web3.utils.toWei('0.02', 'ether');
const privateKey = '35b8266123e40062016c846844993b7e668ddb9689fce3dbd8154539328e1968';


const gasPrice = '20';
const gasLimit = '21000';

const tx = {
  from: fromAddress,
  to: toAddress,
  value: amount,
  gasPrice: web3.utils.toWei(gasPrice, 'gwei'),
  gas: gasLimit,
};

const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

console.log(receipt);