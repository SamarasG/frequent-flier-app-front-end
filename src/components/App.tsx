import React from 'react';
import AppRoutes from '../routes/AppRoutes';
import '../styles/App.css'; // Correct path to styles folder

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Welcome to My React App</h1>
            <AppRoutes />
        </div>
    );
};

export default App;