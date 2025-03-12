import { useNavigate, useEffect } from 'react-router';
import { useState} from '@lynx-js/react';
import './Accueil.css';

export function Accueil() {
    const [listEvents, setListEvents] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {

  }, []);

  const createObjetData = () => {
    const event = {
        Image : "url",
        Nom : "name",

    }
  };
  
  return (
    <list
    scroll-orientation="vertical"
    list-type="single"
    span-count={1}
    style={{
    width: "100%",
    height: "100vh",
    listMainAxisGap: "5px",
    padding: "10px",
    }}
    >
    {Array.from({ length: 50 }).map((item, index) => {
        return (
            <list-item
                item-key={`list-item-${index}`}
                key={`list-item-${index}`}
                >
                <ItemView index={index} />
            </list-item>
        );
    })}
    </list>
  );
}

export default Accueil;
