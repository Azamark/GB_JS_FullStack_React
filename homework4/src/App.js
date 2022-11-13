import React, { useEffect, useState } from 'react';
import { Message } from './components/Message.jsx'
import { Form } from './components/Form.jsx'

function App() {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState({
    author: '',
    text: '',
  });

  useEffect(() => {
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot') {
      setTimeout(() => {
        setMessageList(prevstate => [...prevstate, { text: 'Привет! Я робот!', author: 'robot' }])
      }, 1500)
    }
  }, [messageList]);


  return (
    <div className="App">
      <div className="container flex">
        <h1>HomeWork4</h1>
        <Form data={message} setData={setMessage} setMessage={setMessageList} />
        <h2>
          Сообщения:
        </h2>
        <div className='messageList'>
          {
            messageList.map((e, i) => <Message author={e.author} text={e.text} key={Date.now()} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
