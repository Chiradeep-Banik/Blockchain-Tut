import { initialize } from "./Blockchain/blockchain";
import { IBlockchain } from "./types";

let blockchain: IBlockchain = {
    chain: [],
    difficulty: 1,
    miningReward: 100
};

initialize(blockchain);

console.log(blockchain);
console.log(blockchain.chain);

