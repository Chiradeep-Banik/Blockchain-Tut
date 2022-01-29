import hasher from "../BlockUtils/hasher";
import type { IBlock, IBlockchain } from "./../types";

const createGenesisBlock = (): IBlock<string> => {
    const genesisBlock: IBlock<string> = {
        index: 0,
        hash: hasher(),
        nonce: calculateNonce(),
        previousHash: "0000000000000000",
        timestamp: Date.now(),
        data: "Genesis Block"
    };
    return genesisBlock;
};

let blockchain: IBlockchain = {
    chain: [createGenesisBlock()],
    difficulty: 2,
    miningReward: 100
};


export default blockchain;