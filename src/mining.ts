import { createHash } from 'crypto';

interface IPreMinedBlock {
    index: number;
    data: string;
    prevHash: string;
    nonce: number;
};
interface IMinedBlock {
    index: number;
    data: string;
    prevHash: string;
    nonce: number;
    hash: string;
};

//The hasher function to calculate the hash using sha256
const hasher = (data: IPreMinedBlock) => {
    var hash = createHash('sha256');
    const stringData = JSON.stringify(data);
    hash.update(stringData);
    return hash.digest('hex');
};

//The block object before mining and without its own hash
const preMinedBlock: IPreMinedBlock = {
    index: 1,
    data: "kire kmn asos!!",
    nonce: 2,
    prevHash: "0"
};

/** The mine function to mine the block
 *      - The function increments the nonce until the hash starts with 1313
 *      - The function return a block after appending the hash and with the updated nonce.
*/
const mine = (block: IPreMinedBlock): IMinedBlock => {
    let hash = hasher(block);
    while (hash.substring(0, 4) !== "cccc") {
        console.log(`Hash--${hash}  Nonce--${block.nonce}`);
        block.nonce++;
        hash = hasher(block);
    }
    console.log(`Hash--${hash}  Nonce--${block.nonce}`);
    console.log(block);
    console.log("Block mined");
    return {
        ...block,
        "hash": hash,
    };
};

const minedBlock = mine(preMinedBlock);

console.log(minedBlock);