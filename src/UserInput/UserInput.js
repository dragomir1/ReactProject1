import React from 'react';

const userInput = (props) => {
  const inputstyle = {
    border: '2px solid red'
  }
  return (
    <div className="UserInput">
      <input type="text"
      onChange={props.changed}
      value={props.currentName}
      style={inputstyle} />
    </div>
  )
};

export default userInput;
