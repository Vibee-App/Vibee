import { useCallback, useEffect, useState } from '@lynx-js/react';
import { useNavigate, Outlet } from 'react-router';
import './App.css';
import { Navigation } from './components/navigation/Navigation.jsx';

export function App() {
  useEffect(() => {
    console.info('Hello, ReactLynx');
  }, []);

  return (
    <page>
      <text className="Title">Vibee</text>
      <view className="Background" />
      <view className="App">
        <view className="MainContainer">
          <Outlet />
        </view>
        <Navigation />
      </view>
    </page>
  );
}
