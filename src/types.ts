// The interfaces for the blocks..

interface IBlock<DataType> {
    index: number;
    hash: string;
    previousHash: string;
    timestamp: number;
    data: DataType;
    nonce: number;
}

interface IBlockchain {
    chain: IBlock<string>[];
    difficulty: number;
    miningReward: number;
}

export type { IBlock, IBlockchain };