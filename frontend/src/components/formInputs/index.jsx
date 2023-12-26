import React from "react";

const FormInputs = ({
  type,
  value,
  id,
  name,
  placeholder,
  max,
  iconUrl,
  ...rest
}) => {
  return (
    <div style={{ position: "relative" }}>
      <input
        style={{
          width: "100%",
          padding: "1rem 0 1rem 3rem",
          marginBottom: "1rem",
          color: "white",
          border: "1px solid addrgba(217, 217, 255, 0.48)",
          backgroundColor: "rgba(255, 255, 255, 0.00)",
          borderRadius: "0.5rem",
          outline: "none",
        }}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        maxLength={max}
        {...rest}
      />

      <div
        style={{
          fontSize: "1.5rem",
          position: "absolute",
          color: "grey",
          left: "1rem",
          top: "0.7rem",
        }}
      >
        {iconUrl && <span>{iconUrl}</span>}
      </div>
    </div>
  );
};

export default FormInputs;
