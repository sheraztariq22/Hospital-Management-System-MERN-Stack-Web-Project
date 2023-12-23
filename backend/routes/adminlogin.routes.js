const express = require('express');
const app = express();
const adminController = require('../controllers/adminlogin');
const { AdminAuth } = require('../middleware/authmiddleware');

app.post('/login', adminController.Login);