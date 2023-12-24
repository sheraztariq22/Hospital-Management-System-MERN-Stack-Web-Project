const jwt = require("jsonwebtoken");

function authenticateUser(req, res, next) {
  const token = req.header("authorization");

  if (typeof token !== "undefined") {
    const bearer = token.split(" ");
    const bearerToken = bearer[1];

    jwt.verify(bearerToken, process.env.JWT_SECRET, (err, authData) => {
      if (err) {
        res.status(401).json({ message: "Invalid token" });
      } else {
        req.user = authData;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Token not provided" });
  }
}

module.exports = authenticateUser;
