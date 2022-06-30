const { ethers } = require("hardhat");

async function main() {

    //our contract address
    const TELLOR_DEMO = "0x3776cd110D9a013049baD65F8454650443f3f9A7"

    //get contract at
    let tellorDemo = await ethers.getContractAt("TellorHarmonyDemo", TELLOR_DEMO)

    //read the data
    let price = BigInt(await tellorDemo.getMkrUsdSpotPrice()) / BigInt(1E18)

    //print to console
    console.log(Number(price))
    
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  