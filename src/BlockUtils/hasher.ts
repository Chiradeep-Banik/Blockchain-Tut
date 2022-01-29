import { createHash } from 'crypto';

//The hasher function to calculate the hash using sha256
const hasher = (data: string, index: number, previousHash: string, timestamp: number): string => {
    const hash = createHash('sha256');
    hash.update(JSON.stringify({ data, index, previousHash, timestamp }));
    return hash.digest('hex');
};


export default hasher;
