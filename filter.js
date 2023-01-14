
//IT'S A MIDDLEWARE

const jwt = require("jsonwebtoken");
const JWT_SECRET = "abhi<kg";

const filter = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    res.status(401).send({ status: "Token not found" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data;//globally accessible (in deleteUser function)
   

    next();
  } catch (error) {
    res.status(401).send({ status: "Authenticate using correct token" })
  }
 
}

module.exports ={ filter};