const express = require("express")
const cors = require("cors");
require("dotenv").config();

class Server {
  constructor(){
    this.app = express();
    this.port = process.env.PORT ?? 3000;

    this.midlewares();
    this.routes();
  }

  midlewares(){
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(cors());
  }

  routes() {
    this.app.use(require("../routes/helloWorld.js"));
    this.app.use("/pets", require("../routes/pet.routes.js"));
  }

  start(){
    this.app.listen(this.port, () => {
      console.log(`Server start http//:localhost:${this.port}`);
    })
  }
}


module.exports = Server;

