import React from 'react';

function PartyA({ amount, state, onAmountChange }) {
  return (
    <div className="border p-4 my-2">
      <h1 className="text-lg font-bold">Party A Interface</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
        className="border p-2 mr-2"
      />
      <div>Status: {state}</div>
    </div>
  );
}

export default PartyA;
