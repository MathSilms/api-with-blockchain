const Blockchain = require('../src/blockchain');
const Block = require('../src/block');

describe('blockchain', () => {
    let blockchain;
    let secondBlockchain;

    beforeEach(() => {
        blockchain = new Blockchain;
        // segunda instância da blockchain
        secondBlockchain = new Blockchain;
    })

    it('the first block is genesis block', () => {
        expect(blockchain.chain[0]).toEqual(Block.genesis());
    });

    it('adds a new block', () => {
        let data = 'arquivo.pdf';

        blockchain.addBlock(data);

        expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(data);
    });

    it('validates a valid chain - secondBlockchain', () => {
        let data = 'R$ 500';

        secondBlockchain.addBlock(data);

        expect(blockchain.isValidChain(secondBlockchain.chain)).toBe(true);
    });

    it('invalidates a chain with a corrupt genesis block - secondBlockchain', () => {

        secondBlockchain.chain[0].data = 'bug';

        expect(blockchain.isValidChain(secondBlockchain.chain)).toBe(false);
    });

    it('invalidates a corrupt chain - secondBlockchain', () => {

        let data = 'R$ 400';

        secondBlockchain.addBlock(data);

        secondBlockchain.chain[1].data = 'bug';

        expect(blockchain.isValidChain(secondBlockchain.chain)).toBe(false);
    });

    it('replaces the chain with a valid chain', () => {
        
        let data = 'R$ 700';

        secondBlockchain.addBlock(data);
        blockchain.replaceChain(secondBlockchain.chain);

        expect(blockchain.chain).toEqual(secondBlockchain.chain);

    });

    it('does not replace the chain with one of less or equal length', () => {
        
        let data = 'R$ 800';

        blockchain.addBlock(data);
        blockchain.replaceChain(secondBlockchain.chain);

        expect(blockchain.chain).not.toEqual(secondBlockchain.chain);

    });

})