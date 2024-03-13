const jwt = require("jsonwebtoken");
const { SECRET, SESSION_COOKIE_NAME } = require("../config/env");

const { promisify } = require("util");
const jwtVerify = promisify(jwt.verify);

exports.auth = async (req, res, next) => {
    let token = req.cookies[SESSION_COOKIE_NAME];

    if (token) {
        try {
            const decodedToken = await jwtVerify(token, SECRET);
            req.user = decodedToken;
            next();
        } catch (error) {
            res.status(401).json({ error: "Invalid or expired token" });
        }
    } else {
        next();
    }
};

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.render("404");
    }

    next();
};

exports.isGuest = (req, res, next) => {
    if (req.user) {
        return res.render("404");
    }

    next();
};
