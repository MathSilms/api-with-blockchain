const Router = require("express").Router;

// controllers

const BlockController = require("../controllers/block.controller");

const router = new Router();

router.get('/blocks', BlockController.findBlocks);
router.post('/mineBlock', BlockController.mineBlock);

module.exports = router