import React from "react";
import { Button } from "react-bootstrap";

const FloatingActionButton = ({ to, handleClick }) => {
  return (
    <Button
      variant="primary"
      className="floating-action-button create-new-quiz-button"
      onClick={handleClick}
    >
      {to === "home" ? "Home" : "Create Quiz"}
    </Button>
  );
};

export default FloatingActionButton;
