import { Request, Response } from "express";

const jwt = require('jsonwebtoken');

exports.genarateToken = (req: Request, res: Response) => {
    try {
        const email = req.body.email;
        const token = jwt.sign({ email }, process.env.TOKEN_SECRET);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            // sameSite: "None"
        }).send({ message: "success" })
    } catch (error) {
        res.status(500).send((error as Error).message)
    }

}

exports.removeToken = (req: Request, res: Response) => {
    try {
        res.clearCookie("token", {
            maxAge: 0,
            httpOnly: true,
            secure: false,
            // sameSite: "None"
        }).send({ message: "success" })
    } catch (error) {
        res.status(500).send({ message: (error as Error).message })
    }
}