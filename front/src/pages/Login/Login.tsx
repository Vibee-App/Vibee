import { useNavigate } from 'react-router';
import './Login.css';

export function Login() {
  let navigate = useNavigate();

  return (
    <view className="login-container">
      <view className="back-button" bindtap={() => navigate('/')}>←</view>  
      <text className="login-title">Se Connecter</text>

      <view className="input-container">
        <input type="email" placeholder="jane@example.com" className="input-field" />
        <input type="password" placeholder="********" className="input-field" />
      </view>

      <view className="button logint-button" bindtap={() => alert('Connexion réussie !')}>
        <text>SE CONNECTER</text>
      </view>
    </view>
  );
}

export default Login;
