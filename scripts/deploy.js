const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {

  const TELLOR_ADDRESS = "0x095869B6aAAe04422C2bdc6f185C1f2Aba41EA6B" //tellor on rinkeby

  //build our contract factory
  let UsingTellorDemo = await ethers.getContractFactory("UsingTellorDemo")

  //deploy out contract
  let usingTellorDemo = await UsingTellorDemo.deploy(TELLOR_ADDRESS)

  //await that its deployed
  await usingTellorDemo.deployed()

  //print out the address
  console.log(usingTellorDemo.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
