// SPDX-License-Identifier: MIT
pragma solidity >0.8.3;

//import using tellor from npm package

contract UsingTellorDemo is UsingTellor {

    string url = "https://rickandmortyapi.com/api/episode";

    constructor(address payable _tellorAddress) UsingTellor(_tellorAddress) {}

    function readValue() view returns (...) {

        //build our queryData

        //hash it (build our queryId)

        //get our data

        //decode our data

    }
    
}