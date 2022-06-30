
const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {

  const TELLOR_ADDRESS = "0xb32e05df1f11b1f0e1de2a35f4d99393eb86ff8b" //tellor on harmony

  //create our contract object
  const TellorDemo = await ethers.getContractFactory("TellorHarmonyDemo")
  let tellorDemo = await TellorDemo.deploy(TELLOR_ADDRESS)

  //deploy the contract
  await tellorDemo.deployed()

  //print the address to the console
  console.log(tellorDemo.address)



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
