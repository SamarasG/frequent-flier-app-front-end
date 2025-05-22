import React from 'react';

const Home: React.FC = () => {
    // Placeholder flight data
    const flights = [
        {
            id: '1',
            flightNumber: 'LH123',
            departure: '2024-07-01T10:00:00Z',
            origin: 'Frankfurt',
            destination: 'New York',
        },
        // Add more flights here when integrating with backend
    ];

    return (
        <div className="Home">
            <h1>Your Flights</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {flights.map(flight => (
                    <li key={flight.id} style={{
                        border: '1px solid #ccc',
                        borderRadius: '6px',
                        margin: '10px 0',
                        padding: '16px',
                        maxWidth: '400px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        background: '#fff'
                    }}>
                        <strong>Flight:</strong> {flight.flightNumber}<br />
                        <strong>From:</strong> {flight.origin}<br />
                        <strong>To:</strong> {flight.destination}<br />
                        <strong>Departure:</strong> {new Date(flight.departure).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;