import React from "react";
import "./InputFields.css";

const InputFields = props => {
  return (
    <div className="input-form">
      <input type="text" name={props.field} autoComplete="off" required></input>
      <label for={props.field} className="label-name">
        <span className="content-name">{props.field}</span>
      </label>
    </div>
  );
};

export default InputFields;
