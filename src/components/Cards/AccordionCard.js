import React from "react";
import { Accordion, Button, Card, Form } from "react-bootstrap";

const AccordionCard = () => {
  return (
    <Accordion defaultActiveKey="0" className="accordion__card">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Card 1
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Form.Group controlId="question">
              <Form.Label>Question</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="answers" className="question__answers">
              <Form.Label>Answers</Form.Label>
              <Form.Control type="text" />
              <Form.Control type="text" />
              <Form.Control type="text" />
              <Form.Control type="text" />
            </Form.Group>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default AccordionCard;
