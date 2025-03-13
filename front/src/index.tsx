import { root } from '@lynx-js/react';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.tsx';
import router from './Router.tsx';

root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
