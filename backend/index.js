const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const adminloginRoutes = require("./routes/adminlogin.routes");
const mongoose = require("mongoose");
const StaffRoutes = require("./routes/staffManagement.routes");
const PatientRoutes = require("./routes/patientManagement.routes");

dotenv.config();

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("ERROR Connection: ", err.message));

// Routes
app.use("/api/v1/admin", adminloginRoutes);
app.use("/api/v1/admin/staff", StaffRoutes);
app.use("/api/v1/admin/patient", PatientRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
