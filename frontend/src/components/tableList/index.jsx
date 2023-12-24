// import React from "react";
// import avatart from "../../assets/Ellipse 1094.png";

// const TableList = () => {
//   const data = [
//     { id: 1, name: "Shakir", role: "room incharge" },
//     // Add more data as needed
//   ];

//   const headers = ["Profile", "Name", "Role", "Details", "Action"];

//   return (
//     <>
//       <table style={{ width: "100%", textAlign: "left" }}>
//         <thead>
//           <tr>
//             {headers.map((header) => (
//               <th key={header}>{header}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row) => (
//             <tr key={row.id}>
//               <td>
//                 <img src={avatart} alt="Profile" />
//               </td>
//               <td>{row.name}</td>
//               <td>{row.role}</td>
//               <td>
//                 <button>checkfordetails</button>
//               </td>
//               <td>
//                 <button>delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default TableList;

import React, { useState, useEffect } from "react";
import avatart from "../../assets/Ellipse 1094.png";

const TableList = () => {
  const [staffMembers, setStaffMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/admin/staff/ListofStaff",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Token:", data);
          setStaffMembers(data);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchData();
  }, []);

  const headers = ["Profile", "Name", "Role", "Details", "Action"];

  return (
    <>
      <table style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(staffMembers) && staffMembers.length > 0 ? (
            staffMembers.map((row) => (
              <tr key={row._id}>
                <td>
                  <img src={avatart} alt="Profile" />
                </td>
                <td>
                  {row.firstName} {row.lastName}
                </td>
                <td>{row.role}</td>
                <td>
                  <button>check for details</button>
                </td>
                <td>
                  <button>delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length}>No staff members found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableList;
