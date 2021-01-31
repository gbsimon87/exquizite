import React from "react";
import { Card } from "react-bootstrap";

const CategoryCard = ({ id, name, handleGoToGame }) => {
  return (
    <Card id={id} onClick={handleGoToGame} className="quiz-category-card">
      <Card.Body>{name}</Card.Body>
    </Card>
  );
};

export default CategoryCard;
