import { useNavigate } from 'react-router';
import './Login.css';

export function Login() {
  let navigate = useNavigate();

  return (
    <view className="login-page">
      {/* ✅ Flèche en haut et titre en-dessous */}
      <view className="login-header">
        <text className="login-back-btn" bindtap={() => navigate('/')}>←</text>
      
      <text className="login-title">Se Connecter</text>
      </view>
      <view className="login-form">
        <input type="email" placeholder="jane@example.com" className="login-input" />
        <input type="password" placeholder="********" className="login-input" />
      </view>

      <view className="login-submit-btn" bindtap={() => alert('Connexion réussie !')}>
        <text>SE CONNECTER</text>
      </view>
    </view>
  );
}

export default Login;
