const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/db");
const bodyParser = require("body-parser");
const adminlogin = require('./routes/adminlogin.routes');


dotenv.config();

const app = express();


//middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


connectDb();

//routes
app.use('/api/v1/admin/login', adminlogin);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

