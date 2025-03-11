import { useState, useEffect } from "@lynx-js/react";
import "./Button.css";

interface DarkProps {
  dark: boolean; // ✅ Utilisation correcte de `string`
}

export function Button({ dark }: DarkProps) { 
  const [inputValue, setInputValue] = useState("");
  const [textInsideButton, setTextInsideButton] = useState("");
  const [color, setColor] = useState(true); // ✅ Utilisation correcte de la prop `dark`

  useEffect(() => {
    setColor(dark)
    setTextInsideButton("Aucun")
  }, [dark]); // Déclenché uniquement lors du montage


  return (
    <view className="input-card-url"  style={{ backgroundColor: color ? "#000000" : "#FFFFFF" }}>
      <input
        id="input-id"
        className="input-box"
        value={inputValue}
        placeholder="Enter Card URL"
      />
      <view className="connect-button">
        <text className="button-text" style={{ color: color ? "#FFFFFF" : "#000000" }}>{textInsideButton}</text>
      </view>
    </view>
  );
}

export default Button;
