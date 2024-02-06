const jwt = require('jsonwebtoken');

//middlewares for verify a user by token
exports.verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).send({ message: "unauthorized access" })
    }
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ message: "unauthorized access" })
      }
      req.user = decode;
    })
    next()
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
}