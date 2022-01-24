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



export { IPreMinedBlock, IMinedBlock };