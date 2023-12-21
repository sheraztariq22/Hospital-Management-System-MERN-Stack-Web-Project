import React from "react";

function Button({ btnname, className }) {
  return <button className={className}>{btnname}</button>;
}

export default Button;
