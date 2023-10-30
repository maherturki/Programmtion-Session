const jwt = require("jsonwebtoken");
const User = require("../models/user"); // Import the User model

module.exports.loggedMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;

    User.findOne({ _id: userId })
      .then((response) => {
        if (response) {
          req.auth = {
            userId: userId,
            role: response.role,
          };
          next(); // nesh yet3ada toull l platfrom toul
        } else {
          res.status(401).json({ error: "User doesn't exist" });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.isAdmin = (req, res, next) => {
    try {
      if (req.auth && req.auth.role === 'admin'){
        next()
    } else {
      res.status(403).json({ error: "no access to this route"})
    } 
  } catch(e){
    res.status(401).json({ error: error.message })
  }

}