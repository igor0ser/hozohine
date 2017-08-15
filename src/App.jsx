import React from 'react';
import Header from './Header/Header';
import TestComp from './TestComp/TestComp';
import SocketComp from './SocketComp/SocketComp';

const App = () => (
  <div className="app">
    <Header />
    <main>
      <TestComp />
      <SocketComp />
    </main>
  </div>
);

export default App;
