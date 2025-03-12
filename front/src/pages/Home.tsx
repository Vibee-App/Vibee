import { useState, useEffect, root } from '@lynx-js/react';
import { useNavigate } from 'react-router';

const Home = () => {
  const nav = useNavigate();
  return (
    <view>
      <text
        bindtap={() => nav('/')}
        style={{ fontFamily: 'Ubuntu-Light', color: '#000000' }}
      >
        Home
      </text>
    </view>
  );
};

export default Home;
