import { Outlet, useNavigate } from 'react-router';
import './Landing.css';
import logo from './../../assets/bee.png';

export function Landing() {
  let navigate = useNavigate();

  console.log("Landing Page chargée ✅");

  return (
    <view className="landing-container">
      <view className="logo">
        <image src={logo} className="logo-icon" />
        <text className="app-name">Vibee</text>
      </view>
      
      <view className="button-container">
        <view bindtap={() => navigate('/login')}>
          <text className="button login-button">SE CONNECTER</text>
        </view>
        <view bindtap={() => navigate('/signup')}>
          <text className="button signup-button">S'INSCRIRE</text>
        </view>
      </view>
      <Outlet />
    </view>
  );
}

export default Landing;
