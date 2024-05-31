import React from 'react';

function PartyB({ amount, status, onSettle, onDispute }) {
  return (
    <div className="border p-4 my-2">
      <h1 className="text-lg font-bold">Party B Interface</h1>
      <div>Amount: {amount}</div>
      <div>Status: {status}</div>
      <button 
        onClick={onSettle} 
        disabled={status === 'settled'}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:bg-green-300"
      >
        Agree
      </button>
      <button 
        onClick={onDispute} 
        disabled={status === 'settled'}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2 disabled:bg-red-300"
      >
        Dispute
      </button>
    </div>
  );
}

export default PartyB;
