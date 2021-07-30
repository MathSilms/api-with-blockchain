const Router = require("express").Router;
const Blockchain = require('../../blockchain/index')
const P2pServer = require('../p2p-server');

// controllers

const BlockController = require("../controllers/block.controller");


// instâncias

const bc = new Blockchain();
const p2pServer = new P2pServer(bc);

let blockController = new BlockController(bc, p2pServer);
const router = new Router();

// rotas

router.get('/blocks', blockController.findBlocks);
router.post('/mineBlock', blockController.mineBlock);
// router.post('/mineBlock', P2PController.mineBlock);

module.exports = {router, p2pServer}