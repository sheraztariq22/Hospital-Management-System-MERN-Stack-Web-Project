const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jsonwebtoken = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.json());
app.use(cors());



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

exports.AdminAuth = AdminAuth;