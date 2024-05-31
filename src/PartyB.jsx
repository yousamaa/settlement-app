import React from 'react';

function PartyB({ amount, state, onSettle, onDispute }) {
  return (
    <div className="border p-4 my-2">
      <h1 className="text-lg font-bold">Party B Interface</h1>
      <div>Amount: {amount}</div>
      <div>Status: {state}</div>
      <button 
        onClick={onSettle} 
        disabled={state === 'settled'}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:bg-green-300"
      >
        Agree
      </button>
      <button 
        onClick={onDispute} 
        disabled={state === 'settled'}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2 disabled:bg-red-300"
      >
        Dispute
      </button>
    </div>
  );
}

export default PartyB;
