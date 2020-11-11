import React from "react";
import { Form } from "react-bootstrap";

function AgeInput({ setUserBirthday }) {
  //allows user to enter bday
  return (
    <Form
      onChange={(e) => {
        setUserBirthday(e.target.value);
      }}
    >
      <Form.Group controlId="formBasicEmail">
        <Form.Control placeholder="YYYY-MM-DD" />
        <Form.Text className="text-muted">
          We'll never share your age with anyone else.
        </Form.Text>
      </Form.Group>
    </Form>
  );
}
export default AgeInput;
