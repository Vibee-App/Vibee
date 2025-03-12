import { jsxDEV as _jsxDEV } from "@lynx-js/react/jsx-dev-runtime";
import { useState, useEffect, useCallback } from "@lynx-js/react";
import Bee from './assets/bee.png'
import "./App.css";
import Button from './components/button/Button.jsx';

export function App() {

  const [alterLogo, setAlterLogo] = useState(false);

  useEffect(() => {
    console.info('Hello, ReactLynx');
  }, []);

  const onTap = useCallback(() => {
    'background only';
    setAlterLogo(!alterLogo);
  }, [alterLogo]);

  return (
    <view>
      <view className="Background" />
      <view className="App">
        <view className="Banner">
          <view className="Logo">
           <image src={Bee} className="bee_image"/>
          </view>
        </view>
        <view className="Content">
          <view className="test">
            <Button dark={true} root={"/product"}></Button>
          </view>
        </view>
        <view style={{ flex: 1 }}></view>
      </view>
    </view>
  );
}
