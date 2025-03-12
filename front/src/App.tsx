import { useEffect } from '@lynx-js/react';
import { Outlet } from 'react-router';
import './App.css';
import { Navigation } from './components/navigation/Navigation.jsx';

export function App() {
  useEffect(() => {
    console.info('Hello, ReactLynx');
  }, []);

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
