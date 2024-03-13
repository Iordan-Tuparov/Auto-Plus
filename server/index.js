const express = require("express");

const { PORT } = require("./config/env");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./routes");
const { auth } = require("./middlewares/authMiddleware");

let app = express();

require("./config/mongooseConfig")();

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:4200",
        credentials: true,
    })
);
app.use(cookieParser());
app.use(auth);
app.use(router);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
