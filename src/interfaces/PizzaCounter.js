import React from 'react';
import {Form, Button } from 'react-bootstrap';

function PizzaCounter() {
  return (
    <Form>
        <div className="TitleCard">Calcula tu pizza</div>
        <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>invitados</Form.Label>
        <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
        <Form.Label>Cantidad por persona</Form.Label>
        <Form.Control type="text" placeholder="Cantidad " />
        </Form.Group>
        <div className="titleResult">Necesitaras en total <span>5 pizzas</span></div>
        <Button variant="primary" type="submit">
        Borrar
        </Button>
  </Form>
  );
}

export default PizzaCounter;
