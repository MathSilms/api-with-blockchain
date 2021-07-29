const Block = require('./block');
const Blockchain = require('./blockchain');



let block1 = Block.mineBlock(Block.genesis(), '500');
let block2 = Block.mineBlock(block1, '100');
let block3 = Block.mineBlock(block2, '2030');

let blockchain = new Blockchain(Block.genesis());

blockchain.addBlock(block1);
blockchain.addBlock(block2);
blockchain.addBlock(block3);

console.log("---------------------");
console.log("bloco genesis :", Block.genesis());
console.log("---------------------");
console.log("primeiro bloco :",block1);
console.log("---------------------");
console.log("blocos:", [block1, block2, block3]);
console.log("---------------------");
console.log("blockchain :", blockchain.chain);
console.log("---------------------");

// // simulando um erro 

let secondBlock1 = Block.mineBlock(Block.genesis(), '$900');
let blockchainFork = new Blockchain(secondBlock1);

// erro de corrente com tamanho Menor que a corrente atual
blockchain.replaceChain(blockchainFork.chain);


// erro de corrente invalida
blockchain.replaceChain("teste");
