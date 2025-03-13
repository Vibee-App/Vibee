import { Outlet } from 'react-router';
import './App.css';
import { Navigation } from './components/navigation/Navigation.jsx';

export function App() {
  console.info('Hello, ReactLynx');

  return (
    <page>
      <view className="App">
        <view className="MainContainer">
          <Outlet />
        </view>
      </view>
      <Navigation />
    </page>
  );
}
