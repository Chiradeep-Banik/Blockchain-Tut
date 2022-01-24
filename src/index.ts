import mine from "./BlockUtils/mining";
import verifyHash from "./BlockUtils/verifyHash";
import type { IPreMinedBlock } from "./types";

const new_Block: IPreMinedBlock = {
    index: 1,
    timestamp: Date.now(),
    data: { "name": "banik", "age": 13 },
    prevHash: "0",
    nonce: 0
};

const block = mine(new_Block);

console.log(verifyHash(block));
