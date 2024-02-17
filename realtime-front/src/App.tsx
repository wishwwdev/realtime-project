import React from 'react';
import './App.css';

import { Client } from '@stomp/stompjs';
import SocketJS from 'sockjs-client';

function App() {

  const client = new Client({
    webSocketFactory: () => new SocketJS('http://localhost:4000/ws'),
    onConnect: () => {
      client.subscribe('/topic', (message) => {
        alert(message.body);
      })
    }
  });

  client.activate();

  return (
    <div></div>
  );
}

export default App;
