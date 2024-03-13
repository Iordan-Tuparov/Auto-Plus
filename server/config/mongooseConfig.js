const mongoose = require("mongoose");

let url = `mongodb://localhost:27017/Auto-Plus`;

module.exports = () => mongoose.connect(url).then(() => {
    console.log("dataBase connected!");
  });
