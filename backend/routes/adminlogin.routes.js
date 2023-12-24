const express = require('express');
const router = express.Router();
const { login } = require('../controllers/adminlogin');
const AdminAuth = require('../middleware/authmiddleware');

router.post('/login', login);

module.exports = router;
