import React, { useState } from 'react';
import { Message } from './components/Message.jsx'

function App() {
  const [message, stateMessage] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(ev.target[0].value);
    stateMessage(ev.target[0].value);
  }

  return (
    <div className="App">
      <div className="container flex">
        <h1>HomeWork1</h1>
        <Message message={message} />
        <hr />
        <form onSubmit={handleSubmit}>
          <p>write message</p>
          <input type='text' />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default App;
