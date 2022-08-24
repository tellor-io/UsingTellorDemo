const { ethers } = require("hardhat");

async function main() {

    //our contract address
    const TELLOR_DEMO = "0x8F6C67D251E3d0b680c66E3290981B7DC8568D9d" //fill in here after deployment

    //connecting to our contract
    let demo = await ethers.getContractAt("UsingTellorDemo", TELLOR_DEMO)

    //send tip!
    let val = await demo.readValue()

    console.log(val)
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  