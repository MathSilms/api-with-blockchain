const express = require('express');
// const Blockchain = require('../blockchain');
const router = require('./routes/routes').router;
const p2pServer = require('./routes/routes').p2pServer;
const port = process.env.PORT ||3001;

const app = express();
// const bc = new Blockchain();

app.use(router);
app.use(express.json());

app.listen(port, ()=>{
    console.log('Servidor rodando na porta :', port)
});

p2pServer.listen();

// dados para conectar com a segunda instância da blockchain
//P2P_PORT=5002 PORT=3002 PEERS=ws://localhost:5001


