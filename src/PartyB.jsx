import React from 'react';

function PartyB({ amount, state, onSettle, onDispute }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-4 m-4">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Party B Interface</div>
          <div className="mt-2 text-gray-500">Amount: <span className="font-bold">{amount}</span></div>
          <div className="mt-1 text-gray-500">Status: <span className={`font-bold ${state === 'pending' ? 'text-yellow-500' : state === 'settled' ? 'text-green-500' : 'text-red-500'}`}>{state}</span></div>
          <div className="flex space-x-4 mt-4">
            <button
              onClick={onSettle}
              disabled={state === 'settled'}
              className="flex-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              Agree
            </button>
            <button
              onClick={onDispute}
              disabled={state === 'settled'}
              className="flex-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              Dispute
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartyB;
