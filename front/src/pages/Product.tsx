import { useState, useEffect, root } from '@lynx-js/react';
import { useNavigate } from 'react-router';

const Product = () => {
  const nav = useNavigate();
  return (
    <view>
      <text
        bindtap={() => nav('/')}
        style={{ fontFamily: 'Ubuntu-Light', color: '#000000' }}
      >
        Product
      </text>
    </view>
  );
};

export default Product;
