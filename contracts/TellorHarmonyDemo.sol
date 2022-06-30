pragma solidity ^0.8.0;

import "usingtellor/contracts/UsingTellor.sol";

contract TellorHarmonyDemo is UsingTellor {

    constructor(address payable _tellorAddress) UsingTellor(_tellorAddress) {}

    function getMkrUsdSpotPrice() public view returns(uint256) {

        //make our queryData
        bytes memory queryData = abi.encode("SpotPrice", abi.encode("mkr", "usd"));

        //make our queryId
        bytes32 queryId = keccak256(queryData);

        //read our data
        (, bytes memory value ,) = getDataBefore(queryId, block.timestamp - 30 minutes);

        //parse the price
        uint256 price = abi.decode(value, (uint256));

        return price;
    }
}