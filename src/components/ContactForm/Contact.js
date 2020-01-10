import React from "react";
import { Form, FormGroup } from "reactstrap";
import InputField from "../InputsWithAnimation/InputFields";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="wrapper d-flex align-items-center parallax" id="contact">
      <div className="container">
        <h2>Contact Form</h2>
        <Form>
          <FormGroup>
            <InputField field="Name" type="text" />
          </FormGroup>
          <FormGroup>
            <InputField field="Email" type="email" />
          </FormGroup>
          <FormGroup>
            <InputField field="Comment" type="textarea" />
          </FormGroup>
          <button type="submit" className="btn btn-outline-warning">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
