// authentication.js
const jwt = require('jsonwebtoken');

const AdminAuth = async (req, res, next) => {
    const token = req.headers['authorization'];
    if (token) {
        jwt.verify(token, 'secret', (err, decoded) => {
            if (err) {
                return res.json({
                    message: 'Invalid token'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.json({
            message: 'Token not found'
        });
    }
};

module.exports = AdminAuth;