# UsingTellorDemo

<p align="center">
  <a href='https://www.tellor.io/'>
    <img src= 'https://raw.githubusercontent.com/tellor-io/TellorBrandMaterials/master/Swoosh%20and%20wordmark%20legacy/SwooshWordmarkLegacy.png' width="250" height="200" alt='tellor.io' />
  </a>
</p>

<p align="center">
  <a href='https://twitter.com/WeAreTellor'>
    <img src= 'https://img.shields.io/twitter/url/http/shields.io.svg?style=social' alt='Twitter WeAreTellor' />
  </a>
</p>


## Sample project UsingTellor <a name="sample"> </a>

<b>The Tellor oracle</b> is a decentralized oracle. It provides an option for contracts to interact securely with and obtain data from off-chain.

This project demonstrates a basic Tellor use case. It pairs with a walkthrough for reading the BTC/USD feed with Tellor...it can be applied to any EVM-compatible chain!


For more in-depth information about Tellor, check out our [documentation](https://docs.tellor.io/tellor/).

Quick references are included below:

# Implement Tellor into your project
This repo already includes the [usingTellor](https://github.com/tellor-io/usingtellor) package. You can follow along with [this video tutorial](https://www.youtube.com/watch?v=CBU3hOb-xHM&t=1s) to learn how to complete the setBtcPrice function and read the btc price from tellor.

## How to use
#### 1. Clone project and install dependencies

```bash
git clone git@github.com:tellor-io/UsingTellorDemo.git
npm install
```

#### 2. How to Use
Just inherit the UsingTellor contract, passing the Tellor address as a constructor argument:

Here's an example:
```solidity
// SPDX-License-Identifier: MIT
pragma solidity >0.8.3;

//import using tellor from npm package


contract UsingTellorDemo is UsingTellor {

    uint256 public btcPrice;

    constructor(...) UsingTellor(...) {}

    function setBtcPrice() external {

        // REF: https://github.com/tellor-io/dataSpecs/blob/main/types/SpotPrice.md

        //build our queryData

        //hash it (build our queryId)

        //get our data (5 minutes before)

        //safety checks
        require(, "we never got a submission on this query id");
        require(, "data hasn't been updated to par"); // 12 hours

        //decode our data


    }    
}

```

## Readily available price feeds
>While Tellor can suppport any price feed, this is a comprehensive list of pricefeeds that are currently set up to be reported today!
>![image](https://user-images.githubusercontent.com/39592448/220971536-05761ad1-9645-4eec-a559-e714a3eb9059.png)


#### 3. The sample contract `UsingTellorDemo` has access to the following Tellor functions:

```solidity
/**
 * @dev Retrieves the next value for the queryId after the specified timestamp
 * @param _queryId is the queryId to look up the value for
 * @param _timestamp after which to search for next value
 * @return _value the value retrieved
 * @return _timestampRetrieved the value's timestamp
 */
function getDataAfter(bytes32 _queryId, uint256 _timestamp)
    public
    view
    returns (bytes memory _value, uint256 _timestampRetrieved);

/**
 * @dev Retrieves the latest value for the queryId before the specified timestamp
 * @param _queryId is the queryId to look up the value for
 * @param _timestamp before which to search for latest value
 * @return _value the value retrieved
 * @return _timestampRetrieved the value's timestamp
 */
function getDataBefore(bytes32 _queryId, uint256 _timestamp)
    public
    view
    returns (bytes memory _value, uint256 _timestampRetrieved);

/**
 * @dev Retrieves next array index of data after the specified timestamp for the queryId
 * @param _queryId is the queryId to look up the index for
 * @param _timestamp is the timestamp after which to search for the next index
 * @return _found whether the index was found
 * @return _index the next index found after the specified timestamp
 */
function getIndexForDataAfter(bytes32 _queryId, uint256 _timestamp)
    public
    view
    returns (bool _found, uint256 _index);

/**
 * @dev Retrieves latest array index of data before the specified timestamp for the queryId
 * @param _queryId is the queryId to look up the index for
 * @param _timestamp is the timestamp before which to search for the latest index
 * @return _found whether the index was found
 * @return _index the latest index found before the specified timestamp
 */
function getIndexForDataBefore(bytes32 _queryId, uint256 _timestamp)
    public
    view
    returns (bool _found, uint256 _index);

/**
 * @dev Retrieves multiple uint256 values before the specified timestamp
 * @param _queryId the unique id of the data query
 * @param _timestamp the timestamp before which to search for values
 * @param _maxAge the maximum number of seconds before the _timestamp to search for values
 * @param _maxCount the maximum number of values to return
 * @return _values the values retrieved, ordered from oldest to newest
 * @return _timestamps the timestamps of the values retrieved
 */
function getMultipleValuesBefore(
  bytes32 _queryId,
  uint256 _timestamp,
  uint256 _maxAge,
  uint256 _maxCount
)
  public
  view
  returns (bytes[] memory _values, uint256[] memory _timestamps);

/**
 * @dev Counts the number of values that have been submitted for the queryId
 * @param _queryId the id to look up
 * @return uint256 count of the number of values received for the queryId
 */
function getNewValueCountbyQueryId(bytes32 _queryId)
  public
  view
  returns (uint256);

/**
 * @dev Returns the address of the reporter who submitted a value for a data ID at a specific time
 * @param _queryId is ID of the specific data feed
 * @param _timestamp is the timestamp to find a corresponding reporter for
 * @return address of the reporter who reported the value for the data ID at the given timestamp
 */
function getReporterByTimestamp(bytes32 _queryId, uint256 _timestamp)
  public
  view
  returns (address);

/**
 * @dev Gets the timestamp for the value based on their index
 * @param _queryId is the id to look up
 * @param _index is the value index to look up
 * @return uint256 timestamp
 */
function getTimestampbyQueryIdandIndex(bytes32 _queryId, uint256 _index)
  public
  view
  returns (uint256);

/**
 * @dev Determines whether a value with a given queryId and timestamp has been disputed
 * @param _queryId is the value id to look up
 * @param _timestamp is the timestamp of the value to look up
 * @return bool true if queryId/timestamp is under dispute
 */
function isInDispute(bytes32 _queryId, uint256 _timestamp)
  public
  view
  returns (bool);

/**
 * @dev Retrieve value from oracle based on queryId/timestamp
 * @param _queryId being requested
 * @param _timestamp to retrieve data/value from
 * @return bytes value for query/timestamp submitted
 */
function retrieveData(bytes32 _queryId, uint256 _timestamp)
  public
  view
  returns (bytes memory);
```

#### Tellor Playground:

For ease of use, the  `UsingTellor`  repo comes with a version of the [Tellor Playground](https://github.com/tellor-io/TellorPlayground) contract for easier integration. The most useful Playground functions for testing are as follows:

```solidity
/**
 * @dev A mock function to submit a value to be read without staking needed
 * @param _queryId The tellorId to associate the value to
 * @param _value the value for the queryId
 * @param _nonce the current value count for the query id (just use 0)
 * @param _queryData the data used by reporters to fulfill the data query
 */
function submitValue(bytes32 _queryId, bytes calldata _value, uint256 _nonce, bytes memory _queryData) external;

/**
 * @dev A mock function to create a dispute
 * @param _queryId The tellorId to be disputed
 * @param _timestamp the timestamp of the value to be disputed
 */
function beginDispute(bytes32 _queryId, uint256 _timestamp) external;
```



#### How to Contribute<a name="how2contribute"> </a>  
[Join our Discord](https://discord.gg/tellor)


#### Contributors<a name="contributors"> </a>

This repository is maintained by the Tellor team - [www.tellor.io](https://www.tellor.io)


#### Copyright

Tellor Inc. 2023


