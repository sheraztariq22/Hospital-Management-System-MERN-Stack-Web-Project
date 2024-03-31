const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const adminloginRoutes = require("./routes/adminlogin.routes");
const mongoose = require("mongoose");
const StaffRoutes = require("./routes/staffManagement.routes");
const PatientRoutes = require("./routes/patientManagement.routes");
const ClinicManagementRoutes = require("./routes/clinicManagement.routes");

dotenv.config();

const app = express();
const port = 5000;

// Middlewares
app.use(bodyParser.json());
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
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
app.use("/api/v1/admin/clinic", ClinicManagementRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
