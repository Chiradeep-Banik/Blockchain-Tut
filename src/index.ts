import mine from "./BlockUtils/mining";
import { IPreMinedBlock } from "./BlockUtils/block";

const new_Block: IPreMinedBlock = {
    index: 1,
    data: "Hello World",
    prevHash: "",
    nonce: 0
};

const block = mine(new_Block);

console.log(block);
