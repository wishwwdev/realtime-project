import React from 'react';
import './App.css';

import { io } from 'socket.io-client';

function App() {

  const socket = io('ws://localhost:4010');

  socket.on('connection', () => {
    console.log(socket.id);
  })

  return (
    <div></div>
  );
}

export default App;
