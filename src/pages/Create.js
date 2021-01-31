import React from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import AccordionCard from "../components/Cards/AccordionCard";
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
          <AccordionCard />
        </Form>
      </section>
      <section className="page__create__select_action">
        <Button onClick={handleGoHome} variant="secondary">
          Finish
        </Button>
        <Button variant="primary">Add another card</Button>
      </section>
    </div>
  );
};

export default Create;
