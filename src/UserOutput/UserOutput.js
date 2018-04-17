import React from 'react';
import UserOutputCss from './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
    <p>My name is {props.name}.  Lorem ipsum dolor sit amet, ad usu sanctus laoreet, vel porro honestatis at. Eam erat delectus antiopam ei. </p>
    </div>
  )
}

export default userOutput;
