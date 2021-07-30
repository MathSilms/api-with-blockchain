const Blockchain = require('../../blockchain/index')
const bc = new Blockchain();

class BlockController {

    findBlocks(req, res) {

        res.status(200).json(bc.chain);
    }

    mineBlock(req, res) {
        let blockData = req.body;

        bc.addBlock(blockData);

        res.status(200).json({message: 'Block created successfully'});
    }
}

module.exports = new BlockController();