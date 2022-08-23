const { ethers } = require("hardhat");

async function main() {

    //our contract address
    const TELLOR_DEMO = ... //fill in here after deployment

    //connecting to our contract
    let demo = await ethers.getContractAt("UsingTellorDemo", TELLOR_DEMO)

    //send tip!
    let tx = await demo.tip()

    console.log(tx.hash)
    
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  