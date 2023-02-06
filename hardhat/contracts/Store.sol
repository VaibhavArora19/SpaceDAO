//SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

import {FilecoinMarketConsumer} from "./filecoin-api/FilecoinMarketConsumer.sol";
import {MarketTypes} from "@zondax/filecoin-solidity/contracts/v0.8/types/MarketTypes.sol";

contract Store {
    uint256 public id;

    struct metadata {
        uint256 _id;
        uint256 price;
        string name;
        string property;
        string cid;
        bool supportable;
        bool _private;
        bool forSale;
        address owner;
        uint fundingPeriod;
        uint size;
        uint totalFunding;
        uint index;
    }

    /**
     * @notice this struct is used to store the data of the deal on-chain
     * @dev after the deal is created this struct will have all the related info of that deal
     */
    struct dealData {
        string label;
        uint64 dealClientActorId;
        uint64 dealProviderActorId;
        bool isDealActivated;
        bytes commitment;
        uint64 size;
        int64 startTerm;
        int64 endTerm;
        int64 activated;
        int64 terminated;
    }

    // to get to frontend
    metadata[] public data;

    FilecoinMarketConsumer market = FilecoinMarketConsumer(0xBbb4a0CC1b52EeaAfb52a5F3E15892837e20A4e2);

    //may be will remove this in future
    mapping(uint256 => metadata) public dataById;
    mapping(uint256 => dealData) public dealDataById;
    mapping(address => metadata[]) public ownerData;
    mapping(uint256 => address[]) public supportersOfDataId;

    function storeData(
        string memory _name,
        string memory _property,
        string memory _cid,
        bool _supportable,
        bool _private,
        uint256 _price,
        uint _fundingPeriod,
        uint size
    ) external {
        data.push(
            metadata(
                id,
                _price,
                _name,
                _property,
                _cid,
                _supportable,
                _private,
                true,
                msg.sender,
                _fundingPeriod,
                size,
                0,
                ownerData[msg.sender].length
            )
        );
        dataById[id] = data[id];
        ownerData[msg.sender].push(data[id]);
        id++;
    }

    function buyData(uint256 _id) external payable {
        require(msg.value == dataById[_id].price, "Not enough money");
        //need to add the payment details here based on filecoin prices
        dataById[_id].forSale = false;
        (bool sent, ) = payable(dataById[_id].owner).call{value: msg.value}("");
        require(sent, "Failed to send Ether");
        delete ownerData[dataById[_id].owner][dataById[_id].index];
        dataById[_id].owner = msg.sender;
        ownerData[msg.sender].push(dataById[_id]);
        ownerData[msg.sender][ownerData[msg.sender].length - 1].index = ownerData[msg.sender].length - 1;
    }

    function getDataById(uint256 _id) external view returns (metadata memory) {
        return dataById[_id];
    }

    function supportData(uint256 _id) external payable{
        require(msg.value > 0.1 ether, "Not enough FIL");
        require(dataById[_id].supportable, "Data is not supportable!");
        require(dataById[_id].fundingPeriod > block.timestamp, "Funding period is over!");
        dataById[_id].totalFunding += msg.value;
        supportersOfDataId[_id].push(msg.sender);
    }

    /**
     * @dev this function is called by bounty hunter after uploading data on filecoin
     * This function registers the deal data based on the dealID provided by bounty hunter
     * @param _id of the data
     * @param dealId to get the deal data from filecoin and store it in smart contract
     */
    function registerDeal(uint _id, uint64 dealId) public{
        require(_id < id, "Wrong data id!"); 
        require(dataById[_id].fundingPeriod < block.timestamp, "Funding period is not over yet!");
        market.storeAll(dealId);

        (bytes memory commitment, uint64 size) = market.dealCommitment();
        (int64 startTerm, int64 endTerm) = market.dealTerm();
        (int64 activated, int64 terminated) = market.activationStatus();

        dealData memory newDeal = dealData(
            market.dealLabel(),
            market.dealClientActorId(),
            market.dealProviderActorId(),
            market.isDealActivated(),
            commitment,
            size,
            startTerm,
            endTerm,
            activated,
            terminated
            );

        dealDataById[_id] = newDeal;
    }

    /**
     * @dev this function is called by bounty hunter to claim his bounty
     * @dev this function should be called after calling registerDeal function
     * @param _id of the data
     */
    function verifyClaim(uint _id) public returns (bool){
        require(_id < id, "Wrong data id!");

        if(dealDataById[_id].size == dataById[_id].size) {
            uint totalAmount = dataById[_id].totalFunding + 0.1 ether;
            (bool sent, ) = payable(msg.sender).call{value: totalAmount}("");
            require(sent, "Failed to send Ether");
            return true;
        }

        return false;
    }


    fallback() external payable {}
    receive() external payable {}
}
