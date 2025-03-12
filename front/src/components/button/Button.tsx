import { useState, useEffect } from '@lynx-js/react';
import { useNavigate } from 'react-router';
import './Button.css';

interface ButtonProps {
  text: string;
  dark?: boolean;
  route: string;
}

export function Button({ text, dark, route }: ButtonProps) {
  const [color, setColor] = useState(true); // Bouton noir ou blanc
  const [buttonText, setButtonText] = useState('');

  const nav = useNavigate();

  useEffect(() => {
    if (dark !== undefined && dark) {
      setColor(true);
    } else {
      setColor(false);
    }
    setButtonText(text);
  }, [dark]);

  return (
    <view
      className="input-card-url"
      bindtap={() => nav(`${route}`)}
      style={{ backgroundColor: color ? '#000000' : '#FFFFFF' }}
    >
      <text>ETETE</text>
      <text
        className="button-text"
        style={{
          fontFamily: 'Ubuntu-Light',
          color: color ? '#FFFFFF' : '#000000',
        }}
      >
        {buttonText} TEST
      </text>
    </view>
  );
}

export default Button;
