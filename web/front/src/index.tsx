import { root } from '@lynx-js/react';
import { App } from './App.jsx';
import { createMemoryRouter, RouterProvider } from 'react-router';
import Profile from './pages/profile/Profile.jsx';
import Events from './pages/events/Events.jsx';

const router = createMemoryRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profiles",
    element: <Profile />,
  },
  {
    path: "/events",
    element: <Events />,
  }
], {
  initialEntries: ['/'],
});

root.render(
  <RouterProvider router={router} />
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}