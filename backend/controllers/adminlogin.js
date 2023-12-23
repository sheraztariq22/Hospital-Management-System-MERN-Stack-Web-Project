const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

const adminCredentials = {
    username: 'admin',
    password: '12345678'
};

const Login = async (req, res) => {
    const { username, password } = req.body;
    if (username === adminCredentials.username && password === adminCredentials.password) {
        const token = jwt.sign({
            username: adminCredentials.username,
            password: adminCredentials.password
        }, 'secret');
        res.json({
            token
        });
    } else {
        res.json({
            message: 'Invalid credentials'
        });
    }
};


//exporting the module
module.exports = {
    Login
};

