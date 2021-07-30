const websocket = require('ws');

const p2p_port = process.env.P2P_PORT || 5001;
const peers = process.env.PEERS ? process.env.PEERS.split(',') : [];


class p2pServer {
    constructor(blockchain) {
        this.blockchain = blockchain;
        this.socket = [];
    }

    listen() {
        const server = new websocket.Server({ port: p2p_port });
        server.on('connection', socket => this.connectSocket(socket));
        this.connectToPeers();

        console.log(`Listening for peer-to-peer connections on:${p2p_port}`)
    }

    connectToPeers() {
        peers.forEach(peer => {

            const socket = new websocket(peer);
            socket.on('open', () => this.connectSocket(socket));
        });
    }

    connectSocket(socket) {
        this.socket.push(socket);
        console.log('Socket connected');

        this.messageHandler(socket);
        this.sendChain(socket);
    }

    sendChain(socket) {
        socket.send(JSON.stringify(this.blockchain.chain));
    }

    messageHandler(socket) {
        //aqui
        socket.on('message', message => {
            const data = JSON.parse(message);
            this.blockchain.replaceChain(data);
        });

    }

    syncChain() {
        this.socket.forEach(socket => this.sendChain(socket));
    }
}

module.exports = p2pServer

