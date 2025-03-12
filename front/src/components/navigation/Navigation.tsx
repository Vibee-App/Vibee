import { useNavigate } from 'react-router';
import './Navigation.css';

export function Navigation() {
  let navigate = useNavigate();
  return (
    <view className="Navigation">
      <view className="NavItem">
        <text bindtap={() => navigate('/')}>Accueil</text>
      </view>
      <view className="NavItem">
        <text bindtap={() => navigate('/profiles')}>Profiles</text>
      </view>
      <view className="NavItem">
        <text bindtap={() => navigate('/events')}>Événements</text>
      </view>
    </view>
  );
}
