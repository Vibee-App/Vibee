// RootWrapper.tsx
import React from 'react';
import { App } from '../App.tsx';
import Landing from '../pages/landing/Landing.tsx';
import { useAuth } from './AuthContext.tsx';

const RootWrapper = () => {
  const { user } = useAuth(); // directement utiliser le user du contexte
  return user ? <App /> : <Landing />;
};

export default RootWrapper;
