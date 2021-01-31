import React from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import QuestionCard from "../components/Cards/QuestionCard";
import Header from "../components/Header";

const Create = () => {
  let history = useHistory();
  console.log(history);

  const handleGoHome = () => {
    history.push("/");
  };
  return (
    <div className="page-create">
      <Header title="Create a new Quiz" />
      <section className="create__quiz__area">
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
        </Form>
      </section>
      <section className="page__create__select_action">
        <Button variant="secondary">Add another question</Button>
        <Button onClick={handleGoHome} variant="primary">
          Finish
        </Button>
      </section>
    </div>
  );
};

export default Create;
