// The interfaces for the blocks..

interface IPreMinedBlock {
    index: number;
    timestamp: number;
    data: any;
    prevHash: string;
    nonce: number;
};
interface IMinedBlock extends IPreMinedBlock {
    hash: string;
};

export type { IPreMinedBlock, IMinedBlock };