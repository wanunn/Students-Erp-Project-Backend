const jwt = require('jsonwebtoken')


const auth = async(req, res, next) => {
    const jwt_secret_token = process.env.JWT_SECRET_TOKEN || "abcdefghijklm";
    const token = req.headers['token'];  try {
   
    if(!token)
    {
        return res.status(403).json({message:"Invalid Authorization!"})
    }
    const isToken = jwt.verify(token,jwt_secret_token)
    if(isToken.username != "admin" && isToken.password != "123456")
    {
        return res.status(403).json({message:"Invalid Authorization!"})
    }
    next();
  } catch (error) {
    return res.status(403).json({message:"Invalid Authorization!"})

  }
}

module.exports = auth;