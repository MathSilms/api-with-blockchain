const Block = require('./block');

class Blockchain {
    constructor() {
        this.block = Block;
        this.chain = [this.block.genesis()];
    }
    // método para adicionar blocos na corrente
    addBlock(data) {
        const lastBlock = this.chain[this.chain.length - 1];
        const newBlock = this.block.mineBlock(lastBlock, data);

        this.chain.push(newBlock);
        return newBlock;
    }
    // método para validar se corrente vai ser utilizada na blockchain
    isValidChain(chain) {

        // valida se o primeiro bloco da corrente é igual ao bloco genesis (se não for igual, a corrente não é valida).
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis()))
            return false;


        for (let i = 1; i < chain.length; i++) {

            const block = chain[i];
            const lastBlock = chain[i - 1];

            if (block.lastHash !== lastBlock.hash || block.hash !== Block.blockHash(block))
                return false;

        }

        return true;
    }

    // função para trabalhar o fork da corrente e decidir qual corrente vira a principal. 
    replaceChain(newChain) {
        if (newChain.length <= this.chain.length)
            return console.log('Receive chain is not longer than the current chain');
        else if(!this.isValidChain(newChain))
            return console.log('The received chain is not valid');

        this.chain = newChain;
    }
}

module.exports = Blockchain;