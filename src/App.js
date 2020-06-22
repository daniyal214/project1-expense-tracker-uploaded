import React from 'react';
import  Child from './Child';
import { TransactionProvider } from './TransContext';
import './App.css';

function App() {
  return (
    <div>

    <TransactionProvider>
      <Child />
      
    </TransactionProvider>
    </div>
  );
}

export default App;
