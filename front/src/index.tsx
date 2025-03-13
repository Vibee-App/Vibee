import { root } from '@lynx-js/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.tsx';
import Landing from './pages/landing/Landing.tsx';
import Profile from './pages/profile/Profile.tsx';
import Events from './pages/events/Events.tsx';
import ProtectedRoute from './context/ProtectedRoute.tsx';
import { App } from './App.tsx';
import Home from './pages/Home.tsx';
import router from './Router.tsx';

root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
