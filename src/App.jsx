import React, { useState } from 'react';
import PartyA from './PartyA';
import PartyB from './PartyB';
import 'tailwindcss/tailwind.css';

function App() {
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('pending');

  const handleAmountChange = (newAmount) => {
    setAmount(newAmount);
    setStatus('pending');
  };

  const handleSettle = () => {
    setStatus('settled');
  };

  const handleDispute = () => {
    setStatus('dispute');
  };

  return (
    <div className="flex p-4 space-x-4">
      <PartyA amount={amount} status={status} onAmountChange={handleAmountChange} />
      <PartyB amount={amount} status={status} onSettle={handleSettle} onDispute={handleDispute} />
    </div>
  );
}

export default App;
