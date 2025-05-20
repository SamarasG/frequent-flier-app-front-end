import React from 'react';
import { useHistory } from 'react-router-dom';
import Login from '../components/Auth/Login';

const LoginPage: React.FC = () => {
    const history = useHistory();

    const handleRegisterClick = () => {
        history.push('/register');
    };

    return (
        <div className="LoginPage">
            <h1>Welcome to the Frequent Flier Social App</h1>
            <Login />
            <button onClick={handleRegisterClick} style={{ marginTop: 20 }}>
                Register
            </button>
        </div>
    );
};

export default LoginPage;