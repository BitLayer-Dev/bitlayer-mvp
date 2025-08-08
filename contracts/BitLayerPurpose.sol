// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BitLayerPurpose {
    address public creator;
    string public purpose;

    constructor(string memory _purpose) {
        creator = msg.sender;
        purpose = _purpose;
    }

    function updatePurpose(string memory _newPurpose) public {
        require(msg.sender == creator, "Only the creator can update the purpose.");
        purpose = _newPurpose;
    }
}
