import mine from "../BlockUtils/mining";
import verifyHash from "../BlockUtils/verifyHash";
import { IBlockchain, IMinedBlock, IPreMinedBlock } from "../types";

/**
const initialize = (blockchain: IBlockchain): IBlockchain => {

    const preGenesisBlock: IPreMinedBlock = {
        index: 0,
        timestamp: Date.now(),
        data: "Genesis Block",
        prevHash: "0",
        nonce: 0
    };

    const genesisBlock: IMinedBlock = mine(preGenesisBlock);

    blockchain.chain.push(genesisBlock);
    return blockchain;
};
*/
const addBlock = (blockchain: IBlockchain, block: IMinedBlock): boolean => {
    if (verifyHash(block) && block.index < blockchain.chain.length) {
        const prevHash = blockchain.chain[block.index - 1]?.hash;
        if (prevHash === block.prevHash) {
            blockchain.chain.push(block);
            return true;
        }
    }
    return false;
};


export { initialize, addBlock };
