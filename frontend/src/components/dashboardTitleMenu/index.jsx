import React from "react";
import adimAvatar from "../../assets/Ellipse 1094.png";

const DashboardMenuTitle = ({ titlesAndDescriptions, actionTab }) => {
  const selectedTabData = titlesAndDescriptions.find(
    (item) => item.id === actionTab
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "2rem",
      }}
    >
      <div>
        {selectedTabData && (
          <>
            <h1
              style={{
                color: "#009D92",
                fontSize: "2.5rem",
                fontWeight: "900",
              }}
            >
              {selectedTabData.title}
            </h1>
            <p style={{ color: "white" }}>{selectedTabData.description}</p>
          </>
        )}
      </div>
      <div style={{ alignSelf: "end" }}>
        <img src={adimAvatar} alt="adimAvatar" />
      </div>
    </div>
  );
};

export default DashboardMenuTitle;
