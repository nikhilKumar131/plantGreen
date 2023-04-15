// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol";

contract plantGreen{
    using Counters for Counters.Counter;
    Counters.Counter private IDs;

    struct work{
        uint id;
        address owner;
        address applicant;
        uint plants;
        string proof;
    }

    //hiring
    mapping (address => uint) PitchId;
    mapping (uint => work) WorkIds;
    mapping (address => address) givenWork;

        function pitch() public payable{
            require(msg.value == 10**15 ,"fees is not transfered 0.0001 eth");
            
            IDs.increment();
            
            uint currentId = IDs.current();
            PitchId[msg.sender] = currentId;
            WorkIds[currentId] = work(currentId,msg.sender, msg.sender, 1, "yet to be submitted" );

        }


    //implementing
    mapping (address => uint) appliedFor;
    uint[] proofsAdded;


        function applyFor( uint _id) public {
            appliedFor[msg.sender] = _id;
            WorkIds[_id].applicant = msg.sender;
        }

        function submitProof( string memory _proof, uint _id) public {
            WorkIds[_id].proof = _proof;
            proofsAdded.push(_id);
        }

    //voting
    mapping (uint => bool) public validation;

        function validate(uint _id, bool _val) public payable{
            validation[_id] = _val;
            if(_val == true){
                address _to = WorkIds[_id].applicant;
                (bool sent, bytes memory data) = _to.call{value: msg.value}("");
            }
            else{
                address _to = WorkIds[_id].owner;
                (bool sent, bytes memory data) = _to.call{value: msg.value}("");
            }
        }

}
