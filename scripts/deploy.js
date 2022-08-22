
const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {

  const TELLOR_ADDRESS = "0x88dF592F8eb5D7Bd38bFeF7dEb0fBc02cf3778a0" //tellor on rinkeby

  //build our contract factory

  //deploy out contract

  //await that its deployed

  //print out the address

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
