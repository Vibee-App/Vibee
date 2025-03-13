import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export function Login() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleLogin = () => {
    alert('Connexion réussie !');
  };

  return (
    <view className="login-container">
      <text className="back-button" bindtap={handleBack}>
        ←
      </text>
      <text className="login-title">Se Connecter</text>

      <view className="input-container">
        <input
          type="email"
          placeholder="jane@example.com"
          className="input-field"
        />
      </view>
      <view className="input-container">
        <input type="password" placeholder="********" className="input-field" />
      </view>

      <text className="button login-button" bindtap={handleLogin}>
        SE CONNECTER
      </text>
    </view>
  );
}

export default Login;
