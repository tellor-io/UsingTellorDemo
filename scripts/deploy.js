const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {

  const TELLOR_ADDRESS = "0xD9157453E2668B2fc45b7A803D3FEF3642430cC0" //oracle address

  //build our contract factory
  let UsingTellorDemo = await ethers.getContractFactory("UsingTellorDemo")

  //deploy out contract
  let usingTellorDemo = await UsingTellorDemo.deploy(TELLOR_ADDRESS)

  //await that its deployed
  await usingTellorDemo.deployed()

  //print out the address
  console.log(usingTellorDemo.address)

  if (hre.network.name == "chiado") {
    await hre.run("blockscout-verify", {
      filePath: "contracts/UsingTellorDemo.sol",
      address: usingTellorDemo.address
  })
} else {
    await hre.run("verify:verify", {
      address: usingTellorDemo.address,
      constructorArguments: [
        TELLOR_ADDRESS
      ],
    });
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
