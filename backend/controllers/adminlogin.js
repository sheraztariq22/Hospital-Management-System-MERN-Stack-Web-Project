const jwt = require('jsonwebtoken');

const adminCredentials = {
    username: 'admin',
    password: '12345678'
};

const login = async (req, res) => {
    const { username, password } = req.body;
    if (username === adminCredentials.username && password === adminCredentials.password) {
        const token = jwt.sign({ username }, 'secret', { expiresIn: '1h' });
        res.json({
            message: 'Login successful',
            token
        });
    } else {
        res.status(401).json({
            message: 'Username or password incorrect'
        });
    }
};

module.exports = { login };
