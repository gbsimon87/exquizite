import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import AccordionCard from "../components/Cards/AccordionCard";
import Header from "../components/Header";
import initialState from "../config/data";

const Create = () => {
  const [newQuiz, setNewQuiz] = useState(initialState.newQuiz);
  let history = useHistory();
  console.log(history);

  useEffect(() => {
    console.log({ newQuiz });
  }, [newQuiz]);

  const handleAddQuizCard = () => {
    console.log("handleAddQuizCard");
    const clonedQuiz = { ...newQuiz };
    console.log({ clonedQuiz });
    var newQuizItems = {
      question: "Type your question",
      answers: [
        {
          content: "",
        },
        {
          content: "",
        },
        {
          content: "",
        },
        {
          content: "",
        },
      ],
    };
    clonedQuiz.cards.push(newQuizItems);
    setNewQuiz({ ...newQuiz, clonedQuiz });
  };

  const handleGoHome = () => {
    history.push("/");
  };
  return (
    <div className="page-create">
      <Header title="Create a new Quiz" />
      <section className="create__quiz__area">
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Quiz Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          {newQuiz &&
            newQuiz.cards &&
            newQuiz.cards.map((newQuiz) => <AccordionCard />)}
        </Form>
      </section>
      <section className="page__create__select_action">
        <Button onClick={handleGoHome} variant="secondary">
          Finish
        </Button>
        <Button variant="primary" onClick={handleAddQuizCard}>
          Add another card
        </Button>
      </section>
    </div>
  );
};

export default Create;
