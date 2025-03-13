import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.tsx';
import { login as loginService } from '../../services/authService.ts';
import './Login.css';

export function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [username, setUsername] = useState('julien19@test.fr');
  const [password, setPassword] = useState('password123');

  const handleLogin = async () => {
    const response = await loginService({ username, password }, setUser);
    if (response) {
      navigate('/');
    }
  };

  return (
    <view className="login-page">
      <view className="login-header">
        <text className="login-title">Se Connecter</text>
        <text className="login-back-btn" bindtap={() => navigate('/')}>←</text>
      </view>

      <view className="login-form">
      <input
          id="input-id"
          className="login-input"
          value={username}
          bindinput={(e) => setUsername(e.detail.value.trim())}
          placeholder="Email"
      />
        <input
          type="password"
          placeholder="********"
          className="login-input"
          value={password}
          bindinput={(e) => setPassword(e.detail.value.trim())}
        />
      </view>

      <text className="login-submit-btn" bindtap={handleLogin}>
        SE CONNECTER
      </text>
    </view>
  );
}

export default Login;
