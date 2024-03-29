const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {

  // CONTRACTS REF: https://docs.tellor.io/tellor/the-basics/contracts-reference
  // same address on eth, polygon, gnosis and optimism
  // on their mainnet and testnets
  const TELLOR_ADDRESS = "0xD9157453E2668B2fc45b7A803D3FEF3642430cC0" 

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
