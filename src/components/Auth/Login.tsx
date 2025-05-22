import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post(`/users/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
            if (response.status === 200) {
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token);
                }
                history.push('/home');
            }
        } catch (err: any) {
            if (err.response && err.response.status === 401) {
                setError('Invalid credentials. Please try again.');
            } else {
                setError('Login failed. Please try again.');
            }
        }
    };

    return (
        <div className="Login">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default Login;