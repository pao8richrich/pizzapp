import React from 'react';
import {Form, Button } from 'react-bootstrap';

const PizzaCounter = ({counter,slice,totalPizza,countHandler,sliceHandler,clearHandler,averageHandler}) => {

  return (
    <Form>
        <div className="TitleCard">Calcula tu pizza</div>
        <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Tamaño de la pizza</Form.Label>
        <Form.Control as="select">
          <option>Pequeña</option>
          <option>Mediana</option>
          <option>Grande</option>
          <option>Extra Grande</option>
        </Form.Control>
      </Form.Group>
        <Form.Group >
          <Form.Label>Invitados</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Cantidad " 
            value={counter}
            onChange={countHandler} 
            
          />
        </Form.Group>

        <Form.Group >
        <Form.Label>Cantidad por persona</Form.Label>
        <Form.Control 
        type="number" 
        placeholder="Cantidad " 
        value={slice}
        onChange={sliceHandler}
        />
        </Form.Group>
        <div className="titleResult">Necesitaras en total <span>{totalPizza} pizzas</span></div>
        <Button 
          variant="primary" 
          type="submit" 
          onClick={averageHandler}>
          Calcular
        </Button>
        <Button 
        variant="primary" 
        type="submit" 
        onClick={clearHandler}>
        Reset
        </Button>
  </Form>
  );
}

export default PizzaCounter;
