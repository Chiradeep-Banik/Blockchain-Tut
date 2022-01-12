## Blockchain

### Basic Termenology
- Gas --- The amount of energy needed to do a transaction.
- Gas Price (GWEI)--- The price of gas per unit of gas. 
    - The higher the gas price, the faster the transection is done.
- Gas Limit --- The maximum amount of gas that can be used to do a transaction.

### What is a Blockchain?
- A Chain of Blocks that contain the hash of the previous block.
- Each block's own hash is calculated using the hash of the previous block.
- If we change one block then the next hashes will be different.

### Signing a Transaction
- A transaction is signed by the sender's private key.
- The sender also sends the signature.
- The senders's public key,that they send with transactions, is used to verify the signature.

### Consensus
- The mechaism that determines if a block is valid.
- The consensus is based on(Nakamoto Consensus) ---
    - The Chain Selection (longest chain)
    - Sybil Resistance 
        - Proof of Work (PoW) -- miners --- they compete to find the correct hash.
        - Proof of Stake (PoS) --- validators --- they put up some stake to be a validator.
- (Nakamoto Consensus) -- Longest chain & PoW 

### Layers 
- Layer 1 --- The base immplementation of the blockchain.
    - Bincoin
    - Ethereum 1
- Layer 2 --- Any app built on top of that layer 1 chain.

### Some drawbacks that i think at the moment are:
- The blockchain's security is dependent on th length of the chain.
    - So a smaller chain can be attacked and taken over.
- As the block chain grows, the difficulty of mining a block increases.
    - Thus pushin up the gas fees. And after some time, it becomes too expensive for basic transections.
        - A way that I learned to tackle this :
            - Sharding
                - A way to split the blockchain into multiple chains.
                - Each chain can be treated as a separate blockchain.
                - The main chain maintains the sharded chains.
                - They may use security protocols other than the main chain.
                - May or maynot be more secure than the main chain.
            - Rollups
                - Same as sharding, but the sharded chains are merged into the main chain.
                - The main chain maintains the rollup chains.
                - They derive their security protocols from the main chain.
                - So as secure as the main chain.
- The data that the blocks hold becomes redundant.
    - As a large number of peers store the blockchain. The hold the same data over and over.
    - A way that I learned to tackle this :
        - Block pruning
            - Not very clear to me at the moment. 