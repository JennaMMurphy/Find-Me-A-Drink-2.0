import React, { useState } from "react";
import { Button, Modal, Alert } from "react-bootstrap";
import AgeInput from "./AgeInput";
import { modalBackground } from "./modalStyling";
import moment from "moment";
import "./App.css";

function ModalComp() {
  const [show, setShow] = useState(true);
  const [userBirthday, setUserBirthday] = useState();
  const [user18AndUp, setUser18AndUp] = useState();
  const [ageErrorMessage, setAgeErrorMessage] = useState();

  //validateAge makes sure person entering is over 18
  const validateAge = () => {
    const age = moment().diff(userBirthday, "days");
    if (age >= 6575) {
      //person is over 18 and will be allowed access to site
      setShow(false);
      setUser18AndUp(true);

    } else if (!age) {
      //if they don't enter an age
      setAgeErrorMessage("Oops! You didn't enter your birthday");
      setUser18AndUp(false);
      window.navigator.vibrate(500);

    } else if (age < 6575) {
      //if they're under 18
      setAgeErrorMessage("Please return when you're 18");
      setUser18AndUp(false);
      window.navigator.vibrate(500);
    }
  };

  return (
    <>
      <Modal
        className="text-center"
        backdrop="static"
        show={show}
        style={modalBackground}
      >
        <Modal.Header>
          <h4 className="display-4">
            WELCOME, FRIEND <br />
            (OF LEGAL DRINKING AGE)
          </h4>
        </Modal.Header>
        <Modal.Body>
          Please enter your birthdate
          <br />
          <br />
          <AgeInput setUserBirthday={setUserBirthday} validateAge={validateAge} />
        </Modal.Body>
        {/* conditional render for if person is under 18 or didnot enter their age, it will give message */}
        {user18AndUp === false ? (
          <Alert variant="warning">{ageErrorMessage}</Alert>
        ) : null}
        <Button variant="info" onClick={validateAge}>
          Enter
        </Button>
        <Modal.Footer />
      </Modal>
    </>
  );
}

export default ModalComp;
