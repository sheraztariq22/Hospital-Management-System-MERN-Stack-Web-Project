import React from "react";
import "./styles.css";
import logo from "../../assets/logo/Group 1261152796.svg";
const DashboardSideBar = ({ toggleState, setToggleState, tabs }) => {
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <ul className="listItems">
        <div style={{ width: "5rem", marginBottom: "2rem" }}>
          <img style={{ width: "100%" }} src={logo} alt="Logo" />
        </div>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={toggleState === tab.id ? "activeListItem" : "listItem"}
            onClick={() => toggleTab(tab.id)}
          >
            <span style={{ fontSize: "1.5rem" }}>{tab.icon}</span>
            {tab.label}
          </li>
        ))}
      </ul>
    </>
  );
};

export default DashboardSideBar;
