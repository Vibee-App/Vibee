import { useState, useEffect, root } from "@lynx-js/react";
import { useNavigate } from "react-router";
import "./Button.css";

interface DarkProps {
  dark: boolean;
  root: string;
}

export function Button({ dark, root }: DarkProps) {
  const [inputValue, setInputValue] = useState("");
  const [textInsideButton, setTextInsideButton] = useState("");
  const [color, setColor] = useState(true); // Bouton noir ou blanc
  const [rooting, setRooting] = useState(""); // Chemin du bouton

  const nav = useNavigate();

  useEffect(() => {
    setRooting(root);
    setColor(dark);
    setTextInsideButton("Aucun");
  }, [dark]);

  return (
    <view className="input-card-url" bindtap={() => nav(`${rooting}`)} style={{ backgroundColor: color ? "#000000" : "#FFFFFF" }}>
      <view
        id="input-id"
        className="input-box"
      >
        <view className="connect-button">
          <text className="button-text" style={{ fontFamily: "Ubuntu-Light", color: color ? "#FFFFFF" : "#000000" }}>
            {textInsideButton}
          </text>
        </view>
      </view>
    </view>
  );
}

export default Button;
