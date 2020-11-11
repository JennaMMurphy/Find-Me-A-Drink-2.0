import React from "react";
import { Form } from "react-bootstrap";

function AgeInput({ setUserBirthday, validateAge }) {
  return (
    <Form
      onChange={(e) => {
        setUserBirthday(e.target.value);
      }}

      onSubmit={(e)=> {
         validateAge(); 
         e.preventDefault();
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
