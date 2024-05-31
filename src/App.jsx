import React, { useState, useEffect } from 'react';
import PartyA from './PartyA';
import PartyB from './PartyB';

function App() {
    const [settlement, setSettlement] = useState({ amount: '', state: 'pending' });

    useEffect(() => {
        fetch('http://localhost:3001/settlement')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setSettlement(data);
                }
            })
            .catch(error => console.error('Error fetching settlement:', error));
    }, []);

    const handleAmountChange = (newAmount) => {
        setSettlement(prev => ({ ...prev, amount: newAmount }));

        fetch('http://localhost:3001/settlement', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: newAmount, state: settlement.state }),
        })
            .then(response => response.json())
            .then(data => {
                setSettlement({ amount: data.amount, state: data.state });
            })
            .catch(error => console.error('Error updating settlement:', error));
    };

    const handleStatusChange = (newStatus) => {
        setSettlement(prev => ({ ...prev, state: newStatus }));

        fetch('http://localhost:3001/settlement', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: settlement.amount, state: newStatus }),
        })
            .then(response => response.json())
            .then(data => {
                setSettlement({ amount: data.amount, state: data.state });
            })
            .catch(error => console.error('Error updating settlement:', error));
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-900">Settlement Dashboard</h1>
            </div>
            <div className="flex justify-center">
                <PartyA
                    amount={settlement.amount}
                    state={settlement.state}
                    onAmountChange={handleAmountChange}
                />
                <PartyB
                    amount={settlement.amount}
                    state={settlement.state}
                    onSettle={() => handleStatusChange('settled')}
                    onDispute={() => handleStatusChange('dispute')}
                />
            </div>
        </div>
    );
}

export default App;
