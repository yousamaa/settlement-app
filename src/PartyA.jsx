import React from 'react';

function PartyA({ amount, state, onAmountChange }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-4 m-4">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Party A Interface</div>
          <input
            type="number"
            value={amount}
            onChange={(e) => onAmountChange(e.target.value)}
            className="mt-2 block w-full p-3 border rounded-lg bg-gray-50"
            placeholder="Enter amount"
          />
          <div className="mt-3 text-gray-500">Status: <span className={`font-bold ${state === 'pending' ? 'text-yellow-500' : state === 'settled' ? 'text-green-500' : 'text-red-500'}`}>{state}</span></div>
        </div>
      </div>
    </div>
  );
}

export default PartyA;
