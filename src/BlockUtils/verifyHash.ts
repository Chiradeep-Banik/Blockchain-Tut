import type { IMinedBlock } from "../types";
import hasher from "./hasher";

// Verifies the hash of a block
const verify = (block: IMinedBlock): boolean => {
    const hash = block.hash;
    const calcHash = hasher(block);

    return hash === calcHash;
};

export default verify;