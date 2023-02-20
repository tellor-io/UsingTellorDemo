const { AbiCoder, defaultAbiCoder } = require("ethers/lib/utils");
const { ethers } = require("hardhat");

async function main() {

  // https://docs.tellor.io/tellor/getting-data/funding-a-feed

  /**
   * @dev Function to run a single tip
   * @param _queryId id of tipped data
   * @param _amount amount to tip
   * @param _queryData the data used by reporters to fulfill the query
  */

    let tx
    let amount
    let queryId, queryData

    queryData = "0x0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000124e756d65726963417069526573706f6e736500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000007768747470733a2f2f6170692e6f70656e2d6d6574656f2e636f6d2f76312f666f7265636173743f6c617469747564653d33382e3930266c6f6e6769747564653d2d37372e30342663757272656e745f776561746865723d747275652674656d70657261747572655f756e69743d66616872656e68656974000000000000000000000000000000000000000000000000000000000000000000000000000000001c63757272656e745f776561746865722c2074656d706572617475726500000000"
    queryId = "0x2229c98960590b51fa4fe24037eaf5b21737c71da271ba7709f485ad83445b04" // https://queryidbuilder.herokuapp.com/custom
    amount = BigInt(1E18)

    //our contract addresses
    const AUTOPAY = "0x9BE9B0CFA89Ea800556C6efbA67b455D336db1D0" //autopay on rinkeby
    const TOKEN = "0x51c59c6cAd28ce3693977F2feB4CfAebec30d8a2" //token on rinkeby

    //connecting to our contracts
    let autopay = await ethers.getContractAt("contracts/interfaces/ITellor.sol:ITellor", AUTOPAY)
    let token = await ethers.getContractAt("contracts/interfaces/ITellor.sol:ITellor", TOKEN)

    // send tip
    tx = await autopay.tip(queryId, amount, queryData)
    await tx.wait()
    console.log("tip sent!! at: ", tx.hash)


  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });