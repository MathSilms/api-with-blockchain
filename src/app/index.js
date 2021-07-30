const express = require('express');
// const blockchain = require('../blockchain');
const router = require('./routes/routes');
const port = process.env.PORT ||3001;

const app = express();
//const bc = new Blockchain();
app.use(router);
app.use(express.json());

app.listen(port, ()=>{
    console.log('Servidor rodando na porta :', port)
});



