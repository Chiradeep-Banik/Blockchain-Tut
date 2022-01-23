## Genesis Block -- The starting block of a blockchain. 
- It does not have a previous block so no previous hash.

## Hashing 
- A hashing algorithms must have the following properties
    - It must be **Deterministic**
    - It must be **One-way**
    - It must be **Fast**
    - It must **Withstand artificial collisions**
    - It must be **resistant to changes in the input data -- Avalache effect**

## SHA256 
- It takes any file or value and always produce a fixed length hash of length 256bits i.e. 64 hex-characters.

## Immutable Ledger -- The ledger is immutable i.e. 
- No data on any of the erlier blocks can be changed without changing the later blocks.
- The difficulty of changing a block increases exponentially with the number of blocks.

## Dristibuted Network -- The network of all the connected nodes mining the blockchain.
- The distribution gives the blockchain added protection.
- As now to change an earlier block --> you not only need to change the later blocks in the chain.
- But you must also change the >50% of all the blockchains connected in the network.
- And also do it fast enought so that your chain is the longest..

## Byzentyn Fault Tolerance -- for byzantine general formulah
- The fault tolerance is the ability to recover from some sort of failure.
- Like if from a group of nodes, one of them fails.
- Then in order for the network to work the number of working nodes must be greater than the 66% of the total nodes.
- i.e. If there are 100 nodes and >33% of total nodes fail, then the network could not work.

## Consensus Protocol 
- The consensus protocol is the process of making sure that the network is in agreement on the state of the blockchain.
- For bitcoin, the consensus protocol is the proof of work.
    - The proof of work is the process of finding a nonce that satisfies the desired target hash.
- In case there are two blocks minied at exactly the same time then 
    - The block chain waits for the next block to be mined.
    - Then the two parties compete to mine the next block.
    - Who ever mines the next block will have the longest chain.
    - **The longest chain wins** .
    - The network accepts the longest chain as the main blockchain.
    - Because the next block could only be mined by the group with majority of the hashing power.

