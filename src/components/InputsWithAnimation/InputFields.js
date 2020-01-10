import React from "react";
import "./InputFields.css";

const InputFields = props => {
  return (
    <div className="input-form">
      <input
        type={props.type}
        name={props.field}
        autoComplete="off"
        required
      ></input>
      <label htmlFor={props.field} className="label-name">
        <span className="content-name">{props.field}</span>
      </label>
    </div>
  );
};

export default InputFields;
