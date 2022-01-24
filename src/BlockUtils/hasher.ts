import { createHash } from 'crypto';
import type { IMinedBlock, IPreMinedBlock } from '../types';


//The hasher function to calculate the hash using sha256
const hasher = (data: IPreMinedBlock | IMinedBlock) => {
    var hash = createHash('sha256');
    var hashFood: IPreMinedBlock = {
        index: data.index,
        timestamp: data.timestamp,
        data: data.data,
        prevHash: data.prevHash,
        nonce: data.nonce
    };
    const stringData = JSON.stringify(hashFood);
    hash.update(stringData);
    return hash.digest('hex');
};


export default hasher;
