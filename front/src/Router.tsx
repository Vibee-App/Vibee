import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import Profile from './pages/profile/Profile.jsx';
import Events from './pages/events/Events.jsx';
import { App } from './App.jsx';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/events" element={<Events />} />
      <Route path="/profiles" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
