import type { IMinedBlock } from "../types";
import hasher from "./hasher";


const verify = (block: IMinedBlock): boolean => {
    const hash = block.hash;
    const calcHash = hasher(block);

    return hash === calcHash;
};

export default verify;