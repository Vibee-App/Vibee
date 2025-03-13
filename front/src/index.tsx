import { root } from '@lynx-js/react';
import { App } from './App.jsx';
import { createMemoryRouter, RouterProvider } from 'react-router';
import {Landing} from './pages/landing/Landing.tsx';

import Profile from './pages/profile/Profile.jsx';
import Events from './pages/events/Events.jsx';
import Accueil from './pages/accueil/Accueil.tsx';

const router = createMemoryRouter([
  {
    path: '/',
    element: <Accueil />,
    children: [
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
