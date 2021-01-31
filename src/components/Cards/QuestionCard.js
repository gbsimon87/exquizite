import React from "react";
import { Accordion, Button, Card, Form } from "react-bootstrap";

const QuestionCard = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Question
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="correct">
              <Form.Label>Correct answer</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="question">
              <Form.Label>Other possible answers</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="question">
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="question">
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="question">
              <Form.Control type="text" />
            </Form.Group>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default QuestionCard;
