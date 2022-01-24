import { createHash } from 'crypto';
import { IPreMinedBlock } from './block';



//The hasher function to calculate the hash using sha256
const hasher = (data: IPreMinedBlock) => {
    var hash = createHash('sha256');
    const stringData = JSON.stringify(data);
    hash.update(stringData);
    return hash.digest('hex');
};


export default hasher;
