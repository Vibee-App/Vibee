import { useNavigate } from 'react-router';
import {
  HomeIcon,
  PencilIcon,
  PlusIcon,
  CalendarIcon,
  UserIcon,
} from '../icons/Icons.tsx';
import './Navigation.css';

export function Navigation() {
  const navigate = useNavigate();

  return (
    <view className="Navigation">
      <view className="NavItem" bindtap={() => navigate('/landing')}>
        <HomeIcon />
      </view>

      <view className="NavItem" bindtap={() => navigate('/myEvents')}>
        <PencilIcon />
      </view>

      <view
        className="NavItem NavItem--main"
        bindtap={() => navigate('/createEvent')}
      >
        <PlusIcon />
      </view>

      <view className="NavItem" bindtap={() => navigate('/events')}>
        <CalendarIcon />
      </view>

      <view className="NavItem" bindtap={() => navigate('/profiles')}>
        <UserIcon />
      </view>
    </view>
  );
}
