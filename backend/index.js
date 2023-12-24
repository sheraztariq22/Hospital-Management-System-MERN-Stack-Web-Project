const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const adminloginRoutes = require('./routes/adminlogin.routes');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Connect to database
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("ERROR Connection: ", err.message));


// Routes
app.use('/api/v1/admin', adminloginRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});


