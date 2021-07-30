class BlockController {

    constructor(blockchain, Server) {

        this.blockchain = blockchain;
        this.p2pServer = Server;
    }
    // Para que não haja problema de escopo com o this, os métodos seguem 
    // sendo arrow functions.
    findBlocks = (req, res) => {

         res.status(200).json(this.blockchain.chain);
    }

    mineBlock = (req, res) => {
        let blockData = req.body;

        this.blockchain.addBlock(blockData);
        this.p2pServer.syncChain();

        
        res.status(200).json({ message: 'Block created successfully' });
    }
}

module.exports = BlockController;