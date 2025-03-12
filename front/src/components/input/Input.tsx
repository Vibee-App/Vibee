import { useState, useEffect } from '@lynx-js/react';
import './Input.css';

interface InputProps {
  type: 'text' | 'password' | 'email';
}

export function Input({ type }: InputProps) {
  const [inputType, setInputType] = useState<InputProps['type']>(type);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputType(type);
  }, [type]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <view className="input">
      <input
        className="inputText"
        type={inputType}
        value={inputValue}
        onInput={handleChange}
        placeholder={`Entrez votre ${inputType}`}
      />
    </view>
  );
}

export default Input;
