import React from "react";
import "./App.css";
import { Card, ListGroup } from "react-bootstrap";

function IngredientsList(props) {
  //adds bootstrap styling to ingredients and mesurements
  return (
    <div>
      <Card className="ingredients">
        <ListGroup variant="flush">
          <ListGroup.Item>
            {props.ingredients}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default IngredientsList;
