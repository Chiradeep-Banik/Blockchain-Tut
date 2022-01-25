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

interface IBlockchain {
    chain: IMinedBlock[];
    difficulty: number;
    miningReward: number;
}

export type { IPreMinedBlock, IMinedBlock, IBlockchain };