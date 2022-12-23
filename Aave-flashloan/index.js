// Setup
const { Network, Alchemy } = require("alchemy-sdk");

const settings = {
    apiKey: "c5F6qls4znNuBEZMDJcP_G9UOX-GVIQ1",
    network: Network.MATIC_MUMBAI,
};

const alchemy = new Alchemy(settings);  
  
// Get the latest block
const latestBlock = alchemy.core.getBlockNumber();
    
// Get all outbound transfers for a provided address
alchemy.core
    .getTokenBalances('0x994b342dd87fc825f66e51ffa3ef71ad818b6893')
    .then(console.log);

// Get all the NFTs owned by an address
const nfts = alchemy.nft.getNftsForOwner("0xshah.eth");
    
// Listen to all new pending transactions
alchemy.ws.on(
    { method: "alchemy_pendingTransactions",
    fromAddress: "0xshah.eth" },
    (res) => console.log(res)
);