import React from 'react';
// import {Form} from 'react-bootstrap';

const WithCurrentPizza = Component => props => {
  const {onChange,value,label} = props;
  return
  <Component label={label} onChange={onChange} value={value}/>
}

export default WithCurrentPizza;
