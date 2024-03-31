import React, { useState, useEffect } from "react";
import axios from "axios";

const PatientList = () => {
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/admin/patient/getAllPatients",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data);
        setPatientData(response.data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>This is patient list component</h1>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
          maxHeight: "300px",
          overflowY: "auto",
          border: "1px solid #ddd",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: "10px",
                border: "1px solid #ddd",
              }}
            >
              Name
            </th>
            <th
              style={{
                padding: "10px",
                border: "1px solid #ddd",
              }}
            >
              Contact
            </th>
            <th
              style={{
                padding: "10px",
                border: "1px solid #ddd",
              }}
            >
              Attendant Name
            </th>
          </tr>
        </thead>
        <tbody>
          {patientData.map((patient) => (
            <tr key={patient.id}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {patient.patientName}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {patient.patientContact}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {patient.patientAttendentName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
