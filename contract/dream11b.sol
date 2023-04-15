// SPDX-License-Identifier: GPL-3.0
pragma solidity^0.8.7;

contract Dream11b {


    //owner is the deployer of the contract
    //immutable is used for GAS OPTIMIZATION
    address public immutable owner;

    constructor(){
        owner = msg.sender;
    }

    //this struct is mapped with with playerID(uint) .
    //struct is also packed for gas optimization.
    struct stats {
        uint8  player;
        uint16 runs;
        uint8 _boundries;
        uint8 sixes;
        uint8 wickets;
        uint16 points;
        uint8 team;
    }

    //this struct deals with different type of locks applied in this contract.
    //writing individually was more suitable in this situation but struct is opted here.
    struct Lock {
        bool PermanetLock;
        bool addingTeamLock;
        bool slectingPlayerLock;
        bool rewardLock;
    }

    //this function is internal used to CALCUATE POINTS YOU GOT.
    //ideally such functions should use proxy contracts for upgrades in logic.
    function calPoints(uint16 _runs, uint8 _boundries, uint8 _sixes, uint8 _wickets) internal pure returns(uint16){
        uint16 point;
        point = _runs + _boundries*2 + _sixes*3 + _wickets*18;
        return point;
    }
    
    //purpose of nested mapping is reusing the contract for different GAMES;
    //first uint in all mappings is the GameID(initialized ahead)
    mapping(uint => mapping(address => uint[5])) public ChosenTeam;
    mapping(uint => mapping(uint => stats )) public players;
    mapping(uint => uint )public NoOfPlayers;

    mapping(uint => Lock) lock;

//intialize matchId
    uint public matchId;
    function intializeMatchId(uint id) public {
        matchId = id;
    }

//Set Lock Status

    function setLock(bool _main, bool _team, bool _player, bool _reward) public checkMainLock onlyOwner{
        lock[matchId].PermanetLock = _main;
        lock[matchId].addingTeamLock = _team;
        lock[matchId].slectingPlayerLock = _player;
        lock[matchId].rewardLock = _reward;
    }

        //lock modifier
        modifier checkMainLock(){
            require(lock[matchId].PermanetLock == false,"function is locked(mainLock)");
            _;
        }


        //Team Accending modifier(trick to restrict all selected players to be unique)
        modifier teamAccending(uint a, uint b, uint c, uint d, uint e){
            require(a < b,"playersId req in accending order");
            require(b < c,"playersId req in accending order");
            require(c < d,"playersId req in accending order");
            require(d < e,"playersId req in accending order");
            _;
        }

        //onlyOwner
        modifier onlyOwner(){
            require(msg.sender == owner,"only owner can access these functions");
            _;
        }

//select your team 

    function SelectTeam(uint a, uint b, uint c, uint d, uint e) public payable checkMainLock teamAccending(a,b,c,d,e){
        require(lock[matchId].addingTeamLock == false,"function is locked(teamLock)");
        require(msg.value == 10**15 ,"fees not transfered 0.0001 eth");
        ChosenTeam[matchId][msg.sender] = [a,b,c,d,e];
        allCustomers[matchId].push(msg.sender);
    }

//set Players in the mapping

    function SetPlayer(uint8 _player1, uint16 _runs1, uint8 _boundries1, uint8 _sixes1, uint8 _wickets1, uint8 _team1 ) public checkMainLock onlyOwner{
        require(lock[matchId].addingTeamLock == false,"function is locked(playerLock)");
        uint16 points1 = calPoints(_runs1, _boundries1, _sixes1, _wickets1);
        stats memory Pstats = stats(_player1, _runs1, _boundries1, _sixes1, _wickets1, points1, _team1);
        players[matchId][NoOfPlayers[matchId]] = Pstats;
        NoOfPlayers[matchId] += 1;
    }

// calculate your points

    mapping(uint => address[] )public allCustomers;

    function getYourPoints(address _addr) public view returns(uint){
        uint Tpoints = 0;
        for(uint i = 0; i<5; i++){
            Tpoints += players[matchId][ChosenTeam[matchId][_addr][i]].points;
        }
       
        return Tpoints;
    }
    //mapping from gameID to rewardCutOff
    mapping(uint => uint) rewardCutOff;

    function setRewardCutOff(uint _rew) public onlyOwner checkMainLock{
        rewardCutOff[matchId] = _rew;
    }

    //claimingReward function is left vulnerable re-entrency attack, to demonstrate the attack on website.
    function claimReward() public {
        require(lock[matchId].rewardLock == false,"can't claim reward,func.locked");
        require(getYourPoints(msg.sender) > rewardCutOff[matchId],"you could not win the prize");
        (bool sent, bytes memory data) = msg.sender.call{value: 2*10**15}("");
        //vulnerable to re-entrancy attack
        require(sent, "Failed to send Ether");
    }

    fallback() external payable{}
    receive() external payable{}

//GAS OPTIMIZATION USED:  IMMUTABILITY, PACKING STRUCTS, error String Optimization


}
