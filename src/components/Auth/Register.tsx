import React, { useState } from 'react';
import axios from 'axios';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setMessage('');
        try {
            const response = await axios.post('/users/register', {
                email,
                passwordHash: password, // <-- send as passwordHash
                fullName,
            });
            if (response.status === 201) {
                setMessage('Registration successful! Please log in.');
            }
        } catch (err: any) {
            if (err.response && err.response.status === 400) {
                setError('Validation error: ' + (err.response.data?.message || 'Invalid input.'));
            } else {
                setError('Registration failed. Please try again.');
            }
        }
    };

    return (
        <div className="Register">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name:</label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </div>
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
                <button type="submit">Register</button>
            </form>
            {error && <p className="error">{error}</p>}
            {message && <p className="success">{message}</p>}
        </div>
    );
};

export default Register;