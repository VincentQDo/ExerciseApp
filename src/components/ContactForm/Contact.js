import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import InputField from "../InputsWithAnimation/InputFields";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="wrapper d-flex align-items-center parallax">
      <div className="container">
        <h2>Contact Form</h2>
        <Form>
          <FormGroup>
            <InputField field="Name" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="example@email.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" />
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
