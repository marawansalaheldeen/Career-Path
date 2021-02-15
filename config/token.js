const jwt = require("jsonwebtoken");
const { ExpiredSecurityTokenException, UnAuthorizedToken } = require('../helper/exception');
const requestHandler = require('../helper/requestHandler');

const jwtKey = require('./auth.config');
const jwtExpirySeconds = '8000s'; // 24 hours

// create token by user email
const createToken = (student_registration_number) => {
    const claims = { issuer: student_registration_number, subject: 'auth' }
    return token = jwt.sign(claims, jwtKey.secret.authkey, { expiresIn: jwtExpirySeconds })
}

// verify token 
const verifyToken = (token, callback) => {
    jwt.verify(token, jwtKey.secret.secret, (err, decoded) => {
        try {
            if (err) {
                if (err.expiredAt) {
                    throw new ExpiredSecurityTokenException('Token Expired')
                } else {
                    throw new UnAuthorizedToken('Token UnAuthorized')
                }

            } else {
                callback("user Verified", decoded.issuer)
            }
        } catch (err) {
            requestHandler.HandleRequest(err, (result) => {
                callback(result, " ");
            })
        }

    });
}




const verifyRequestToken =(req,res,next)=>{
        let token = req.headers['x-access-token'];
        console.log(token);
        jwt.verify(token, jwtKey.secret.secret, (err, decoded) => {
            try {
                if (err) {
                    if (err.expiredAt) {
                        res.json('Token Expired');
                    } else {
                        res.json('Token UnAuthorized');
                    }
    
                } else {
                    req.decoded = decoded;
                    next();
                }
            } catch (err) {
                res.status(401).json({'error':'please authnticate'})
            }
        });
}

module.exports = {
    createToken,
    verifyToken,
    verifyRequestToken
}