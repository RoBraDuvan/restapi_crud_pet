const mongo = require("mongoose");
require("dotenv").config();

class BaseData {
  constructor () {
    this.uri = process.env.URI ?? ""
  }

  init() {
    try {
      mongo.connect(this.uri);
      console.log("DataBase connected");
    } catch (error) {
      console.log(error);
    }
  }

};


module.exports = BaseData;