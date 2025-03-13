// MainLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import './Container.css';

const Container = () => {
  return (
    <view>
      <view className="Container">
        <Outlet />
      </view>
    </view>
  );
};

export default Container;
