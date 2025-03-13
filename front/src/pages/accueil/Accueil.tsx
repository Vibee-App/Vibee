import { useNavigate, useEffect } from 'react-router';
import { useState} from '@lynx-js/react';
import './Accueil.css';

interface Event {
    event_id: number;
    image: string;
    event: string;
    tags: string[];
    heure_debut: string;
    date_debut: string;
    adresse: string;
    resumer: string;
  }
  

export function Accueil() {
    const [listEvents, setListEvents] = useState<Event[]>([]);
    const [loadPage, setLoad] = useState(true);
    
  useEffect(() => {

  }, []);

  const createObjetsData = () => {
    const event: Event = {
      event_id: 7473738,
      image: 'url',
      event: 'name',
      tags: ['hfzehh', 'dzjkjkkz'],
      heure_debut: 'heure',
      date_debut: '12 Mars 2025',
      adresse: '6 rue du chandelier',
      resumer: 'hzefjsdhhyjd',
    };
    setListEvents((prev) => [...prev, event]);
    setLoad
  };
  
  if(loadPage == true){
    return (
      <view className="input-card-url loading">
        <text>Chargement...</text>
      </view>
    )
  }
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
