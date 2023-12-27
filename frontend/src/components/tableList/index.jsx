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
    <div style={containerStyle}>
      <h1>Staff Members List</h1>
      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header} style={tableHeaderStyle}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.isArray(staffMembers) && staffMembers.length > 0 ? (
              staffMembers.map((row) => (
                <tr key={row._id}>
                  <td style={tableCellStyle}>
                    <img src={avatart} alt="Profile" style={avatarStyle} />
                  </td>
                  <td style={tableCellStyle}>
                    {row.firstName} {row.lastName}
                  </td>
                  <td style={tableCellStyle}>{row.role}</td>
                  <td style={tableCellStyle}>
                    <button style={buttonStyle}>Check Details</button>
                  </td>
                  <td style={tableCellStyle}>
                    <button style={buttonStyle}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={headers.length} style={noDataCellStyle}>
                  No staff members found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const containerStyle = {
  maxWidth: "100%",
  overflowX: "auto",
};

const tableContainerStyle = {
  maxHeight: "280px",
  overflowY: "auto",
};

const tableStyle = {
  width: "100%",
  textAlign: "left",
};

const tableHeaderStyle = {
  padding: "10px",
  border: "1px solid #ddd",
};

const tableCellStyle = {
  padding: "10px",
  border: "1px solid #ddd",
};

const avatarStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
};

const buttonStyle = {
  padding: "8px 12px",
  backgroundColor: "#4CAF50",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const noDataCellStyle = {
  padding: "10px",
  textAlign: "center",
  fontStyle: "italic",
  color: "#888",
};

export default TableList;
