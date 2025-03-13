// MainLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const Container = () => {
  return (
    <view>
      <text>Vibee</text>
      <view>
        <Outlet />
      </view>
      <text>© 2025 Vibee</text>
    </view>
  );
};

export default Container;
