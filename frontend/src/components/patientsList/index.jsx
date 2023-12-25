// import React from "react";

// const PatientList = () => {
//   return (
//     <div>
//       <h1>This is patient list component </h1>
//     </div>
//   );
// };

// export default PatientList;

import React, { useState, useEffect } from "react";
import axios from "axios";

const PatientList = () => {
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/admin/staff/ListofStaff",
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiaWF0IjoxNzAzNDM4Mjk3LCJleHAiOjE3MDQzMDIyOTd9.7RqyqIHKDYXTO8ylCh6OQrSJOEyiB1lFFLlkwzKy_OA`,
            },
          }
        );
        setPatientData(response.data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <div>
      <h1>This is patient list component</h1>
      <ul>
        {patientData.map((patient) => (
          <li key={patient.id}>{patient.name}</li>
          // Replace "id" and "name" with the actual properties returned by your API
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
