const express = require("express");

const { PORT } = require("./config/env");
const cors = require("cors");
const router = require("./routes");

let app = express();

require("./config/mongooseConfig")();

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:4200",
        credentials: true,
    })
);
app.use(router);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
