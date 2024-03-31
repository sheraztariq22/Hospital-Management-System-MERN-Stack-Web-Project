import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ClinicReport = () => {
  const [clinicReport, setClinicReport] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/admin/clinic/getAllClinics",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        if (response.status >= 200 && response.status < 300) {
          const data = response.data; // axios directly provides the response data
          console.log("Clinic Report:", data);
          setClinicReport(data);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Clinic Info</h1>
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
              Clinic Name
            </th>
            <th
              style={{
                padding: "10px",
                border: "1px solid #ddd",
              }}
            >
              Clinic New Address
            </th>
            <th
              style={{
                padding: "10px",
                border: "1px solid #ddd",
              }}
            >
              Clinic Previous Address
            </th>
          </tr>
        </thead>
        <tbody>
          {clinicReport && clinicReport.length > 0 ? (
            clinicReport.map((clinic) => (
              <tr key={clinic.id}>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {clinic.clinicName}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {clinic.clinicNewAddress}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {clinic.clincPreviousAddress}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No clinic data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ClinicReport;
