// SPDX-License-Identifier: MIT
pragma solidity >0.8.3;

//import using tellor from npm package
import "usingtellor/contracts/UsingTellor.sol";

contract UsingTellorDemo is UsingTellor {

    uint256 public btcPrice;

    constructor(...) UsingTellor(...) {}

    function setBtcPrice() external {

        // REF: https://github.com/tellor-io/dataSpecs/blob/main/types/SpotPrice.md

        //build our queryData

        //hash it (build our queryId)

        //get our data

        //safety checks
        require(, "we never got a submission on this query id");
        require(, "data hasn't been updated to par");

        //decode our data


    }    
}