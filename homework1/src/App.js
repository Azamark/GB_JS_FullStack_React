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
      <h1>HomeWork1</h1>
      <Message message={message} />
      <hr />
      <form onSubmit={handleSubmit}>
        <input type='text' />
        <button>Send</button>
      </form>
    </div>
  );
}

export default App;
