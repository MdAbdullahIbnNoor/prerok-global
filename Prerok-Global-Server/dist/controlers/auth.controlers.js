"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
exports.genarateToken = (req, res) => {
    try {
        const email = req.body.email;
        const token = jwt.sign({ email }, process.env.TOKEN_SECRET);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            // sameSite: "None"
        }).send({ message: "success" });
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.removeToken = (req, res) => {
    try {
        res.clearCookie("token", {
            maxAge: 0,
            httpOnly: true,
            secure: false,
            // sameSite: "None"
        }).send({ message: "success" });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};
