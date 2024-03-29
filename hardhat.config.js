require("@nomiclabs/hardhat-waffle");
require("dotenv").config()


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.18",

  networks: {
    hardhat: {
      hardfork: process.env.CODE_COVERAGE ? "berlin" : "london",
      initialBaseFeePerGas: 0,
      allowUnlimitedContractSize: true,
    },
    chiado: {
      url: "https://rpc.chiadochain.net",
      accounts: [process.env.PRIVATE_KEY],
      gas: 10000000,
      gasPrice: 40000000000
    },
    goerli: {
      url: process.env.NODE_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    mumbai: {
      url: process.env.NODE_URL,
      accounts: [process.env.PRIVATE_KEY],
    }
  },
}
