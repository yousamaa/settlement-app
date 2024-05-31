import React, { useState, useEffect } from 'react';
import PartyA from './PartyA';
import PartyB from './PartyB';

function App() {
    const [settlement, setSettlement] = useState({ amount: '', state: 'pending' });

    useEffect(() => {
        // Fetch the current settlement from the server when the component mounts
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
        // Update amount locally for responsiveness
        setSettlement(prev => ({ ...prev, amount: newAmount }));

        // Send the updated amount and current state to the server
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
        // Update state locally for responsiveness
        setSettlement(prev => ({ ...prev, state: newStatus }));

        // Send the current amount and updated state to the server
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
        <div className="flex p-4 space-x-4">
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
    );
}

export default App;
