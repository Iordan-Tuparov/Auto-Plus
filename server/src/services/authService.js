const User = require("../models/UserModel");

const { SALT, SECRET } = require("../config/env");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, SALT);

    const createdUser = User.create({
        email: userData.email,
        username: userData.username,
        password: hashedPassword,
    });

    if (!createdUser) {
        throw {
            message: "Invalid request!",
        };
    }

    return createdUser;
};

exports.login = async ({ email, password }) => {
    if (!email || !password) {
        throw {
            message: "Email and password is require!",
        };
    }

    const user = await User.findOne({ email: email });

    if (!user) {
        throw { message: "Password or username is not valid!" };
    }

    const isValid = bcrypt.compare(user.password, password);

    if (!isValid) {
        throw { message: "Invalid username or password!" };
    }

    return user;
};

exports.createToken = (user) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            {
                _id: user._id,
                username: user.username,
            },
            SECRET,
            { expiresIn: "2d" },
            (err, decodedToken) => {
                if (err) {
                    return reject(err);
                }

                resolve(decodedToken);
            }
        );
    });
};
