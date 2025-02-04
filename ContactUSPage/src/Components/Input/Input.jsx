import React from "react";
import styles from "./input.module.css";

const Input = (props) => {
  const height = props.height;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: "15px",
      }}
      className={styles.formInput}
    >
      <label htmlFor={props.text} id={props.text}>
        {props.text}{" "}
      </label>
      <input
        id={props.text}
        type="text"
        name={props.text}
        style={{
          paddingLeft: "5px",
          height: "height",
          verticalAlign: "top",
          textAlign: "left",
          padding: "10px 20px",
        }}
      />
    </div>
  );
};

export default Input;
