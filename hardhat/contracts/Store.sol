//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Store {
    uint256 public id;

    struct metadata {
        uint256 _id;
        uint256 price;
        string name;
        string property;
        string cid;
        string supportable;
        bool _private;
        address owner;
    }
    // to get to frontend
    metadata[] public data;

    //may be will remove this in future
    mapping(uint256 => metadata) public dataById;
    mapping(address => metadata[]) public ownerData;
    mapping(uint256 => address[]) public supportersOfDataId;

    function storeData(
        string memory _name,
        string memory _property,
        string memory _cid,
        string memory _supportable,
        bool _private,
        uint256 _price
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
                msg.sender
            )
        );
        dataById[id] = data[id];
        ownerData[msg.sender].push(data[id]);
        id++;
    }

    function buyData(uint256 _id) external payable {
        require(msg.value == dataById[_id].price, "Not enough money");
        //need to add the payment details here based on filecoin prices
    }

    function getDataById(uint256 _id) external view returns (metadata memory) {
        return dataById[_id];
    }

    function supportData(uint256 _id) external {
        //need to add the payment details here
        supportersOfDataId[_id].push(msg.sender);
    }
}
