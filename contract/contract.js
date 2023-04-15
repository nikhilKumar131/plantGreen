export const address = "0x5c611322732A2f6A2b7dd49076Be8255b9E1DC3e";
export const abi =[
	{
		"inputs": [],
		"name": "claimReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "intializeMatchId",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "b",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "c",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "d",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "e",
				"type": "uint256"
			}
		],
		"name": "SelectTeam",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_main",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_team",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_player",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_reward",
				"type": "bool"
			}
		],
		"name": "setLock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_player1",
				"type": "uint8"
			},
			{
				"internalType": "uint16",
				"name": "_runs1",
				"type": "uint16"
			},
			{
				"internalType": "uint8",
				"name": "_boundries1",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_sixes1",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_wickets1",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_team1",
				"type": "uint8"
			}
		],
		"name": "SetPlayer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rew",
				"type": "uint256"
			}
		],
		"name": "setRewardCutOff",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "allCustomers",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ChosenTeam",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "getYourPoints",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "matchId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "NoOfPlayers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "players",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "player",
				"type": "uint8"
			},
			{
				"internalType": "uint16",
				"name": "runs",
				"type": "uint16"
			},
			{
				"internalType": "uint8",
				"name": "_boundries",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "sixes",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "wickets",
				"type": "uint8"
			},
			{
				"internalType": "uint16",
				"name": "points",
				"type": "uint16"
			},
			{
				"internalType": "uint8",
				"name": "team",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]