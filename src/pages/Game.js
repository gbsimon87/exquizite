import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, ButtonGroup, Card } from "react-bootstrap";

import Header from "../components/Header";

const Game = ({ data = [], setCurrentQuiz }) => {
  let { quizId } = useParams();
  let history = useHistory();
  const [currentlyShowing, setCurrentlyShowing] = useState(0);

  useEffect(() => {
    setCurrentQuiz(quizId);
    console.log("currentlyShowing:", currentlyShowing);
  }, [quizId, currentlyShowing]);

  const handleUserSelection = (event) => {
    console.log(event);
    console.log(data);
    const quizLength = data[0].questions.length;
    console.log("quizLength:", quizLength);
    console.log("currentlyShowing:", currentlyShowing);
    if (quizLength - 1 === currentlyShowing) {
      alert("game is over");
      history.push("/");
    }
    setCurrentlyShowing(currentlyShowing + 1);
  };

  return (
    <div className="page-game">
      {data && data[0] && data[0].name && (
        <Header title={`${data[0].name || "No title"}`} />
      )}
      {data && data[0] && data[0].questions && (
        <Card
          key={data[0].questions[currentlyShowing].id}
          className="game__area__multiple__choice"
        >
          <Card.Body>
            <Card.Text>{data[0].questions[currentlyShowing].title}</Card.Text>
            {data[0].questions[currentlyShowing].answers.map((answer) => (
              <Card.Text>{answer.description}</Card.Text>
            ))}
            <ButtonGroup
              className="game__area__select__answer__button__button"
              aria-label="select answer"
            >
              <Button
                onClick={(event) => handleUserSelection(event)}
                variant="light"
              >
                A
              </Button>
              <Button
                onClick={(event) => handleUserSelection(event)}
                variant="light"
              >
                B
              </Button>
              <Button
                onClick={(event) => handleUserSelection(event)}
                variant="light"
              >
                C
              </Button>
              <Button
                onClick={(event) => handleUserSelection(event)}
                variant="light"
              >
                D
              </Button>
            </ButtonGroup>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Game;
