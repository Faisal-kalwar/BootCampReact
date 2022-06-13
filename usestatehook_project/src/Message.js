import React from 'react';

function Message(props){
    return (
    <div className="message">
      <p className="message__text">Counter value is: {props.counter}</p>
    </div>
  );
}
export default Message;

