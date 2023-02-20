require("@nomiclabs/hardhat-waffle");
require("@ericxstone/hardhat-blockscout-verify");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config()

let SOLIDITY_VERSION = require("@ericxstone/hardhat-blockscout-verify").SOLIDITY_VERSION;
let EVM_VERSION = require("@ericxstone/hardhat-blockscout-verify").EVM_VERSION;


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
    goerli: {
      url: process.env.NODE_URL,
      accounts: [process.env.PRIVATE_KEY],
      gas: 10000000,
      gasPrice: 40000000000
    },
    chiado: {
      url: "https://rpc.chiadochain.net",
      accounts: [process.env.PRIVATE_KEY],
      gas: 10000000,
      gasPrice: 40000000000
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  blockscoutVerify: {
    blockscoutURL: "https://blockscout.com/gnosis/chiado",
    contracts: {
      "UsingTellorDemo": {
        compilerVersion: SOLIDITY_VERSION.SOLIDITY_V_8_4, // checkout enum SOLIDITY_VERSION
        optimization: true,
        evmVersion: EVM_VERSION.EVM_LONDON, // checkout enum SOLIDITY_VERSION
        optimizationRuns: 0,
      },
    },
  },
}
