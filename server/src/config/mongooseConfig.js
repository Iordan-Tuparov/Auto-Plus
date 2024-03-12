const mongoose = require("mongoose");

let url = `mongodb://localhost:27017/first-project`;

module.exports = () => mongoose.connect(url).then(() => {
    console.log("dataBase connected!");
  });
