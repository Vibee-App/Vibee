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
  const [isLoaded, setIsLoaded] = useState(false);

  const nav = useNavigate();

  useEffect(() => {
    setColor(dark ?? false);
    setButtonText(text);
    setIsLoaded(true);
  }, [dark, text]);

  if (!isLoaded) {
    return (
      <view className="input-card-url loading">
        <text>Chargement...</text>
      </view>
    );
  }

  return (
    <view
      className="input-card-url"
      bindtap={() => nav(route)}
      style={{
        backgroundColor: color ? '#000000' : '#FFFFFF',
        border: '2px solid black',
      }}
    >
      <text
        className="button-text"
        style={{ color: color ? '#FFFFFF' : '#000000' }}
      >
        {buttonText}
      </text>
    </view>
  );
}

export default Button;
