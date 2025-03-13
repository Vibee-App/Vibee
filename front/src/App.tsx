import { runOnMainThread, useEffect, useState } from '@lynx-js/react';
import { Outlet, useNavigate } from 'react-router';
import './App.css';
import { Navigation } from './components/navigation/Navigation.jsx';

interface userProps {
  name: string;
  authenticated: boolean;
}

const userMock = {
  name: 'John Doe',
  authenticated: true,
};

export function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState<userProps | null>(null);

  console.info('Hello, ReactLynx');

  useEffect(() => {
    if (user === null) {
      navigate('/landing');
    } else {
      navigate('/events');
    }
  }, [user, navigate]);

  return (
    <page>
      <view className="App">
        <view className="MainContainer">
          <Outlet />
        </view>
      </view>
      <Navigation />
    </page>
  );
}
