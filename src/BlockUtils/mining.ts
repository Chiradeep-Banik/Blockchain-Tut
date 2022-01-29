import type { IBlock } from '../types';
import hasher from './hasher';

/** The mine function to mine the block
 *      - The function increments the nonce until the hash starts with 1313
 *      - The function return a block after appending the hash and with the updated nonce.
*/

const mine = (block: IBlock<string>): string => {
    let hash = hasher(block);
    while (hash.substring(0, 4) !== "cccc") {
        console.log(`Hash--${hash}  Nonce--${block.nonce}`);
        block.nonce++;
        hash = hasher(block);
    }
    console.log(`Hash--${hash}  Nonce--${block.nonce}`);
    const minedBlock: IMinedBlock = {
        ...block,
        "hash": hash,
    }
    console.log(minedBlock);
    console.log("Block mined ⛏️ ⛏️ ⛏️ ⛏️");
    return minedBlock;
};

export default mine;