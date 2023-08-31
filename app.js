const Server = require("./server/server");
const BaseData = require("./db/db");

const server = new Server();
const db = new BaseData();

server.start();
db.init();