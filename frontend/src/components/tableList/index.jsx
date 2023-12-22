import React from "react";
import avatart from "../../assets/Ellipse 1094.png";

const TableList = () => {
  const data = [
    { id: 1, name: "Shakir", role: "room incharge" },
    // Add more data as needed
  ];

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
          {data.map((row) => (
            <tr key={row.id}>
              <td>
                <img src={avatart} alt="Profile" />
              </td>
              <td>{row.name}</td>
              <td>{row.role}</td>
              <td>
                <button>checkfordetails</button>
              </td>
              <td>
                <button>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableList;
