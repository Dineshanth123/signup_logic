import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext'; // Adjust path as needed
import authService from '../../api/authService'; // Adjust path as needed

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await authService.login(username, password);
            login(response.data);  // Assuming 'login' updates global state and possibly redirects user
            setMessage('Logged in successfully');
        } catch (error) {
            setMessage('Login failed: ' + (error.response?.data?.detail || 'Unknown error'));
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 offset-2">
                    <div className="card">
                        <h5 className="card-header mt-5">User Login</h5>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">User Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="username" 
                                        value={username} 
                                        onChange={e => setUsername(e.target.value)}
                                        aria-describedby="usernameHelp"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="password" 
                                        value={password} 
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3 form-check">
                                    <input 
                                        type="checkbox" 
                                        className="form-check-input" 
                                        id="rememberMe"
                                    />
                                    <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                                {message && <div className="alert alert-warning mt-2">{message}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
