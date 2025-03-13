// router.tsx
import React from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import RootWrapper from './context/RootWrapper.tsx';
import Home from './pages/Home.tsx'; // page de connexion par exemple
import Profile from './pages/profile/Profile.tsx';
import Events from './pages/events/Events.tsx';
import Container from './Container.tsx';
import ProtectedRoute from './context/ProtectedRoute.tsx';
import Login from './pages/Login/Login.tsx';

const router = createMemoryRouter([
  {
    path: '/',
    element: <Container />,
    children: [
      { index: true, element: <RootWrapper /> },
      {
        // Les routes ci-dessous nécessitent que l'utilisateur soit authentifié.
        element: <ProtectedRoute />,
        children: [
          { path: 'profiles', element: <Profile /> },
          { path: 'events', element: <Events /> },
          { path: 'createEvent', element: <Events /> },
          { path: 'myEvents', element: <Events /> },
        ],
      },
      { path: 'login', element: <Login/> },
      { path: 'signup', element: <text>Signup</text> },
    ],
  },
]);

export default router;
