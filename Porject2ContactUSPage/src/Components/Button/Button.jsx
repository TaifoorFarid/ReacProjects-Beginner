import React from "react";

const Button = ({ message, icon, bgColor, color, ...rest }) => {
  return (
    <button
      {...rest}
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
        height: "34px",
        borderRadius: "5px",
        backgroundColor: bgColor + "",
        color: color + "",
        border: "1px solid black",
        minWidth: "200px",
        marginTop: "16px",
      }}
    >
      {icon}
      <p>{message}</p>
    </button>
  );
};

export default Button;
