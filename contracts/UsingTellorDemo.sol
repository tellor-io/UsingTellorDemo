// SPDX-License-Identifier: MIT
pragma solidity >0.8.3;

//import using tellor from npm package
import ...;

contract UsingTellorDemo is ... {

    // REF: https://github.com/tellor-io/dataSpecs/blob/main/types/NumericApiResponse.md
    
    string url = "https://rickandmortyapi.com/api/episode"; //url of API
    string parseArgs = "info, count"; //arguments we need to parse the JSON response

    constructor(...) ... {}

    function readValue() public view returns ... {

        //build our queryData

        //hash it (build our queryId)

        //get our data

        //decode our data

    }
    
}