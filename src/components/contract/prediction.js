import { ethers } from "ethers";

export const predictContractInstByAddrContractAbi = [
	{
		"inputs": [
			{
				"internalType": "bytes",
				"name": "poolId",
				"type": "bytes"
			},
			{
				"internalType": "uint256",
				"name": "newMinBetAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "newMaxBetAmount",
				"type": "uint256"
			}
		],
		"name": "changeBetAmounts",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newGameControllerAddress",
				"type": "address"
			}
		],
		"name": "changeGameControllerAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newFeeAddress",
				"type": "address"
			}
		],
		"name": "changeGameFeeAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "newFeePercentage",
				"type": "uint8"
			}
		],
		"name": "changeGameFeePercentage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes",
				"name": "poolId",
				"type": "bytes"
			},
			{
				"internalType": "uint256",
				"name": "minBetAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maxBetAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "poolBetsLimit",
				"type": "uint256"
			}
		],
		"name": "createPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes",
				"name": "poolId",
				"type": "bytes"
			},
			{
				"internalType": "uint32",
				"name": "batchSize",
				"type": "uint32"
			},
			{
				"internalType": "int64",
				"name": "timeMS",
				"type": "int64"
			}
		],
		"name": "distribute",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "bytes",
						"name": "poolId",
						"type": "bytes"
					},
					{
						"internalType": "bool",
						"name": "upOrDown",
						"type": "bool"
					}
				],
				"internalType": "struct Prediction.makeTradeStruct",
				"name": "userTrade",
				"type": "tuple"
			}
		],
		"name": "makeTrade",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_newGameController",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_feeJackpotAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_affiliateManager",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "PendingDistributions",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ReentrancyGuardReentrantCall",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "GameStarted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "reason",
				"type": "bytes"
			}
		],
		"name": "GameStopped",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "poolId",
				"type": "bytes"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalWinners",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "from",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "to",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "int64",
				"name": "timestamp",
				"type": "int64"
			}
		],
		"name": "RoundDistributed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes",
				"name": "poolId",
				"type": "bytes"
			},
			{
				"indexed": false,
				"internalType": "int64",
				"name": "timestamp",
				"type": "int64"
			},
			{
				"indexed": false,
				"internalType": "int32",
				"name": "startPrice",
				"type": "int32"
			},
			{
				"indexed": false,
				"internalType": "int32",
				"name": "endPrice",
				"type": "int32"
			}
		],
		"name": "RoundEnded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes",
				"name": "poolId",
				"type": "bytes"
			},
			{
				"indexed": false,
				"internalType": "int64",
				"name": "timestamp",
				"type": "int64"
			},
			{
				"indexed": false,
				"internalType": "int32",
				"name": "price",
				"type": "int32"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "minTradeAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "maxTradeAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "poolTradesLimit",
				"type": "uint256"
			}
		],
		"name": "RoundStarted",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "startGame",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes",
				"name": "reason",
				"type": "bytes"
			}
		],
		"name": "stopGame",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "poolId",
				"type": "bytes"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "prediction",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newTotal",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "gameId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "int64",
				"name": "roundStartTime",
				"type": "int64"
			}
		],
		"name": "TradePlaced",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "poolId",
				"type": "bytes"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "TradeReturned",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "poolId",
				"type": "bytes"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tradeAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "winningsAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "finalWin",
				"type": "uint256"
			}
		],
		"name": "TradeWinningsSent",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes",
				"name": "poolId",
				"type": "bytes"
			},
			{
				"internalType": "int64",
				"name": "timeMS",
				"type": "int64"
			},
			{
				"internalType": "int32",
				"name": "price",
				"type": "int32"
			},
			{
				"internalType": "uint32",
				"name": "batchSize",
				"type": "uint32"
			}
		],
		"name": "trigger",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "affiliateManager",
		"outputs": [
			{
				"internalType": "contract AffiliateManager",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "feeAddress",
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
		"inputs": [],
		"name": "feeJackpotAddress",
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
		"inputs": [],
		"name": "feeJackpotPercentage",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "feePercentage",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "gameController",
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
		"inputs": [],
		"name": "gameId",
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
		"name": "getContractBalance",
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
				"internalType": "bytes",
				"name": "poolId",
				"type": "bytes"
			}
		],
		"name": "hasPendingDistributions",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes",
				"name": "poolId",
				"type": "bytes"
			}
		],
		"name": "isPoolOpen",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isRunning",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "notRunningReason",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
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
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "pools",
		"outputs": [
			{
				"internalType": "bool",
				"name": "created",
				"type": "bool"
			},
			{
				"internalType": "int32",
				"name": "startPrice",
				"type": "int32"
			},
			{
				"internalType": "int32",
				"name": "endPrice",
				"type": "int32"
			},
			{
				"internalType": "uint256",
				"name": "minBetAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maxBetAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "poolBetsLimit",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "uint256[]",
						"name": "bets",
						"type": "uint256[]"
					},
					{
						"internalType": "address[]",
						"name": "addresses",
						"type": "address[]"
					},
					{
						"internalType": "uint256",
						"name": "total",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "distributedCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalDistributed",
						"type": "uint256"
					}
				],
				"internalType": "struct Prediction.BetGroup",
				"name": "upBetGroup",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "uint256[]",
						"name": "bets",
						"type": "uint256[]"
					},
					{
						"internalType": "address[]",
						"name": "addresses",
						"type": "address[]"
					},
					{
						"internalType": "uint256",
						"name": "total",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "distributedCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalDistributed",
						"type": "uint256"
					}
				],
				"internalType": "struct Prediction.BetGroup",
				"name": "downBetGroup",
				"type": "tuple"
			},
			{
				"internalType": "int64",
				"name": "roundStartTime",
				"type": "int64"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

export const prediction = async (provider) => {
  const etherProvider = new ethers.providers.Web3Provider(provider);
  const etherSigner = etherProvider?.getSigner();
//   console.log("etherSigner : ",etherSigner);  
  const predictionInst = new ethers.Contract(
    import.meta.env.VITE_APP_PREDICTION_ADDRESS,
    predictContractInstByAddrContractAbi,
    etherSigner
  );
    // console.log("🚀 ~ prediction ~ import.meta.env.VITE_APP_PREDICTION_ADDRESS:", import.meta.env.VITE_APP_PREDICTION_ADDRESS)
  return predictionInst;
};
