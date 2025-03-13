import { root } from '@lynx-js/react';
import { App } from './App.jsx';
import { createMemoryRouter, RouterProvider } from 'react-router';
import {Landing} from './pages/landing/Landing.tsx';
import Login from './pages/Login/Login.tsx';
import Signup from './pages/Signup/Signup.tsx';
import Profile from './pages/profile/Profile.jsx';
import Events from './pages/events/Events.jsx';

const router = createMemoryRouter([
  {
    path: '/',
    element: <App/>,
    children: [

      { path: 'login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: 'landing', element: <Landing /> },
      { path: 'profiles', element: <Profile /> },
      { path: 'events', element: <Events /> },
    ],
  },
]);

root.render(<RouterProvider router={router} />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
