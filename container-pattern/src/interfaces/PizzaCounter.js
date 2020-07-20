import React from 'react';
import {Form, Button } from 'react-bootstrap';

const PizzaCounter = ({ sizeSliceHandler,counter,slice,totalPizza,countHandler,sliceHandler,clearHandler,averageHandler}) => {

  return (
    <Form>
        <div className="TitleCard">Calcula tu pizza</div>
        <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Tamaño de la pizza</Form.Label>
        <Form.Control as="select"  onChange={sizeSliceHandler} >
          <option value={4} >Pequeña</option>
          <option value={6}>Mediana</option>
          <option value={8}>Grande</option>
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
        <div className="titleResult">Necesitaras en total <span>{totalPizza} pizza</span></div>
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
