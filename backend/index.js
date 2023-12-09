const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/db");
const bodyParser = require("body-parser");
const app = express();
const appointmentRoutes = require("./routes/appointmentRoutes");

dotenv.config();


//middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));


app.use("/api/userAppointment", appointmentRoutes);

connectDb();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

