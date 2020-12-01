import { ethers } from "./libs/ethers-5.0.esm.min.js";

// A Web3Provider wraps a standard Web3 provider, which is
// what Metamask injects as window.ethereum into each page
ethereum.autoRefreshOnNetworkChange = false;
window.ethereum.enable();

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
console.log(signer);
const Zhou1 = "0x95A65aF08A46eb52B15014ea6C136a6c10b7B59f";
const Zhou2 = "0x130F22f6046B171aD243781596feE681aeFCdBC1";
const Zhou3 = "0x848697b5Cf8B9E82c7e5f213718628c599e704c0";

// const contractAddress = "0xda5ade5d857486b32e422303c5ce0e66bdeabebe";
const FuckTokenAddress = "0xfe47677bd51ea90162003259e8857f585281ca71";
const ShitTokenAddress = "0x114d703206fae31dec7327b850fa10e5bc8b97f0";
const BitchTokenAddress = "0x1b943d032619b028e7263c70d906309ae8c577e8";
const MotherfuckerTokenAddress = "0xf992723e66333a675a93368ab5d48e5d3dc00009";
const BastardTokenAddress = "0x93570c7d2775ddab3e0b3cbdf150f91a3f3856cc";
const DickTokenAddress = "0xff32f0b51479bcdc5774e47e800eae5fa71428aa";
const DamnTokenAddress = "0x4e8cbc469b9c5cb877d0c0151ff5ebfa25d7b477";
const HellTokenAddress = "0x1d8f8d4c329b378d90ec35cbf9fd274d1d4ab158";
const AssTokenAddress = "0x987f196ea9fe9c7316da9930bf08a0e13fd5db16";

const contractABI = [
  "function reward(uint256 amt) public",
];
// const contract = new ethers.Contract(contractAddress, contractABI, provider);
const Fuckcontract = new ethers.Contract(FuckTokenAddress, contractABI, provider);
const Shitcontract = new ethers.Contract(ShitTokenAddress, contractABI, provider);
const Bitchcontract = new ethers.Contract(BitchTokenAddress, contractABI, provider);
const Motherfuckercontract = new ethers.Contract(MotherfuckerTokenAddress, contractABI, provider);
const Bastardcontract = new ethers.Contract(BastardTokenAddress, contractABI, provider);
const Dickcontract = new ethers.Contract(DickTokenAddress, contractABI, provider);
const Damncontract = new ethers.Contract(DamnTokenAddress, contractABI, provider);
const Hellcontract = new ethers.Contract(HellTokenAddress, contractABI, provider);
const Asscontract = new ethers.Contract(AssTokenAddress, contractABI, provider);

const FucktokenWithSigner = Fuckcontract.connect(signer);
const ShittokenWithSigner = Shitcontract.connect(signer);
const BitchtokenWithSigner = Bitchcontract.connect(signer);
const MotherfuckertokenWithSigner = Motherfuckercontract.connect(signer);
const BastardtokenWithSigner = Bastardcontract.connect(signer);
const DicktokenWithSigner = Dickcontract.connect(signer);
const DamntokenWithSigner = Damncontract.connect(signer);
const HelltokenWithSigner = Hellcontract.connect(signer);
const AsstokenWithSigner = Asscontract.connect(signer);


let inputTexts = [];

var lib = ['fuck','shit','bullshit', 'bitch', 'motherfucker','bastard','dick','dickhead','damn','hell','asshole','dumbass'];
var censoredText = [];

let i = 0;

let inputSubmit = document.getElementById("input-submit");

inputSubmit.addEventListener("click", function(){
  //get inputbox
  let inputText = document.querySelector(".input-text");

  inputTexts.push(inputText.value);
  let CurrentTexts = inputTexts[inputTexts.length-1];
  //get all words
  var inputWords = CurrentTexts.split(" ");

//Censor function
  // inputWords.forEach(elementInput => {
  //   lib.forEach(elementLib => {
  //     if(elementLib == elementInput){
  //       console.log("Censor!");
  //       censoredText.push(elementInput);
  //     }
  //   });
  // });

  let censoredString = "";

  for(let i = 0; i < inputWords.length; i++) {

    let currentWord = inputWords[i];

    if(lib.indexOf(currentWord) < 0) {
      censoredText.push(currentWord);
      censoredString+=currentWord + " ";
    } else if (lib.indexOf(currentWord) == 0) {
      console.log("Censor!");
      currentWord = 'love';
      censoredString += currentWord + " ";
      FucktokenWithSigner.reward(10000000000);
      //fuckcoin
    } else if (lib.indexOf(currentWord) == 1 || lib.indexOf(currentWord) == 2) {
      console.log("Censor!");
      currentWord = 'rose';
      censoredString += currentWord + " ";
      //shitcoin
      ShittokenWithSigner.reward(1);
    } else if (lib.indexOf(currentWord) == 3) {
      console.log("Censor!");
      currentWord = 'beauty';
      //bitchcoin
      BitchtokenWithSigner.reward(1);
      censoredString += currentWord + " ";
    } else if (lib.indexOf(currentWord) == 4) {
      console.log("Censor!");
      currentWord = 'motherlover';
      censoredString += currentWord + " ";
      //motherfucker
      MotherfuckertokenWithSigner.reward(1);
    } else if (lib.indexOf(currentWord) == 5) {
      console.log("Censor!");
      currentWord = 'genius';
      censoredString += currentWord + " ";
      //bastard
      BastardtokenWithSigner.reward(1);
    } else if (lib.indexOf(currentWord) == 6) {
      console.log("Censor!");
      currentWord = 'duck';
      censoredString += currentWord + " ";
      //dick
      DicktokenWithSigner.reward(1);
    } else if (lib.indexOf(currentWord) == 7) {
      console.log("Censor!");
      currentWord = 'duckhead';
      censoredString += currentWord + " ";
      //dick
      DicktokenWithSigner.reward(1);
    } else if (lib.indexOf(currentWord) == 8) {
      console.log("Censor!");
      currentWord = 'bless';
      censoredString += currentWord + " ";
      //damn
      DamntokenWithSigner.reward(1);
    } else if (lib.indexOf(currentWord) == 9) {
      console.log("Censor!");
      currentWord = 'heaven';
      censoredString += currentWord + " ";
      //hell
      HelltokenWithSigner.reward(1);
    } else if (lib.indexOf(currentWord) == 10 || lib.indexOf(currentWord) == 11) {
      console.log("Censor!");
      currentWord = 'cutie';
      censoredString += currentWord + " ";
      //ass
      AsstokenWithSigner.reward(1);
    } 
  }

//console log
  // console.log(CurrentTexts);
  console.log(inputWords);
  console.log(censoredText);
  console.log(censoredString);

})


// The Metamask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
// const signer = provider.getSigner();
// console.log(signer);
// const Zhou1 = "0x95A65aF08A46eb52B15014ea6C136a6c10b7B59f";
// const Zhou2 = "0x130F22f6046B171aD243781596feE681aeFCdBC1";
// const Zhou3 = "0x848697b5Cf8B9E82c7e5f213718628c599e704c0";

// // const contractAddress = "0xda5ade5d857486b32e422303c5ce0e66bdeabebe";
// const FuckTokenAddress = "0xfe47677bd51ea90162003259e8857f585281ca71";
// const ShitTokenAddress = "0x114d703206fae31dec7327b850fa10e5bc8b97f0";
// const BitchTokenAddress = "0x1b943d032619b028e7263c70d906309ae8c577e8";
// const MotherfuckerTokenAddress = "0xf992723e66333a675a93368ab5d48e5d3dc00009";
// const BastardTokenAddress = "0x93570c7d2775ddab3e0b3cbdf150f91a3f3856cc";
// const DickTokenAddress = "0xff32f0b51479bcdc5774e47e800eae5fa71428aa";
// const DamnTokenAddress = "0x4e8cbc469b9c5cb877d0c0151ff5ebfa25d7b477";
// const HellTokenAddress = "0x1d8f8d4c329b378d90ec35cbf9fd274d1d4ab158";
// const AssTokenAddress = "0x987f196ea9fe9c7316da9930bf08a0e13fd5db16";

// const contractABI = [
//   "function reward(uint256 amt) public",
// ];
// // const contract = new ethers.Contract(contractAddress, contractABI, provider);
// const Fuckcontract = new ethers.Contract(FuckTokenAddress, contractABI, provider);
// const FucktokenWithSigner = Fuckcontract.connect(signer);
// tokenWithSigner.reward(10);

// main();

// async function main() {

//   // READ-ONLY FUNCTIONS
  
//   // reading from the provider (general ethereum + metamask stuff)
//   let blockNumber = await provider.getBlockNumber();
//   console.log("block number: " + blockNumber);
  
//   let balance = await provider.getBalance(Zhou1);
//   let formattedBalance = ethers.utils.formatEther(balance);
//   let fixedBalance = parseFloat(formattedBalance).toFixed(2); 
//   console.log("My balance: " + fixedBalance + "ETH");

//   // reading from the signer (specific to the wallet currently logged in)
//   // let address = await signer.getAddress();
//   // console.log("address: " + address);
//   // For FireFox


//   // reading from the contract
//   let tokenName = await contract.name();
//   console.log(tokenName);
//   let betBalance = await contract.balanceOf(Zhou1);
//   console.log(ethers.utils.formatEther(betBalance));

//   // STATE-CHANGING FUNCTIONS

//   // connect to the signer
//   const tokenWithSigner = contract.connect(signer);

//   const amount = ethers.utils.parseUnits("10.0", 18);
//   console.log("amount to send: " + amount);

  
//   let tx = tokenWithSigner.transfer(Zhou2, amount);
// }
          




// // // Send 1 ether to an ens name.
// // const tx = signer.sendTransaction({
// //   to: doug2,
// //   value: ethers.utils.parseEther("1.0")
// // });
