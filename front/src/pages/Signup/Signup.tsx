import { useNavigate } from 'react-router';
import './Signup.css';

export function Signup() {
  let navigate = useNavigate();

  return (
    <view className="signup-page">

        <view className="signup-header">
            
            <text className="signup-back-btn" bindtap={() => navigate('landing')}>←</text>  
            <text className="signup-title">S'inscrire</text>
        </view>
      <view className="signup-form">
        <input type="text" className="signup-input" placeholder="Nom" />
        <input type="text" className="signup-input" placeholder="Prénom" />
        <input type="email" className="signup-input" placeholder="Email@" />
        <input type="password" className="signup-input" placeholder="Mot de passe" />
        <input type="number" className="signup-input" placeholder="L'âge" />
      </view>

      <view className="signup-submit-btn" bindtap={() => alert('Inscription réussie !')}>
        <text>S'INSCRIRE</text>
      </view>
    </view>
  );
}

export default Signup;
