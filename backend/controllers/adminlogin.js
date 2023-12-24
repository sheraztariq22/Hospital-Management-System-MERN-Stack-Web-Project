const jwt = require('jsonwebtoken');

const adminCredentials = {
    email: 'admin@example.com',
    password: '12345678'
};

const login = async (req, res) => {
    const { email, password } = req.body;
    if (email === adminCredentials.email && password === adminCredentials.password) {
        const token = jwt.sign({ email }, 'secret', { expiresIn: '1h' });
        res.json({
            message: 'Login successful',
            token
        });
    } else {
        res.status(401).json({
            message: 'email or password incorrect'
        });
    }
};

module.exports = { login };
