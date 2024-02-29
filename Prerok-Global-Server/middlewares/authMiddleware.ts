import { NextFunction, Request, Response } from "express";

const jwt = require('jsonwebtoken');

interface JwtPayload {
  userId: string;
  email: string;
}

interface IRequest extends Request {
  user?: {
    userId: string;
    email: string;
  };
}

//middlewares for verify a user by token
exports.verifyUser = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).send({ message: "unauthorized access" })
    }
    jwt.verify(token, process.env.TOKEN_SECRET, (err: Error | null, decode: JwtPayload) => {
      if (err) {
        return res.status(401).send({ message: "unauthorized access" })
      }
      req.user = decode;
    })
    next()
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message })
  }
}