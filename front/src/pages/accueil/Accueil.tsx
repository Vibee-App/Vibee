import { useEffect, useState } from '@lynx-js/react';
import './Accueil.css';

interface Event {
  event_id: number;
  image: string;
  event: string;
  tags: string[];
  timeStamp: number;
  adresse: string;
  resumer: string;
}

interface EventOutput {
  event_id: number;
  image: string;
  event: string;
  tags: string[];
  heure_debut: string;
  date_debut: number;
  adresse: string;
  resumer: string;
}

export function Accueil() {
  const [listEvents, setListEvents] = useState<EventOutput[]>([]);
  const [listEventsToday, setListEventsToday] = useState<EventOutput[]>([]);
  const [isLoaded, setLoaded] = useState(false);

  // Données d'exemple
  const table: Event[] = [
    {
      event_id: 106373,
      image: 'https://www.bigcitynantes.fr/wp-content/uploads/2024/01/Chevaliers-©-Archivio-Fotografico-Museo-Stibbert.jpg',
      event: 'Exposition Chevaliers',
      tags: ['EXPO'],
      timeStamp: Date.now(),
      adresse: '2 Rue des Etats, 44000, Nantes',
      resumer: 'L’exposition Chevaliers se tiendra au Château des Ducs de Bretagne à Nantes...',
    },
    {
      event_id: 106754,
      image: 'https://www.bigcitynantes.fr/wp-content/uploads/2024/08/immersia.jpg',
      event: 'Spectacle son et lumière Immersia',
      tags: ['SPECTACLE'],
      timeStamp: Date.now(),
      adresse: '5 Place du Sanitat, 44100, Nantes',
      resumer: 'L’événement aura lieu à l’église Notre-Dame-de-Bon-Port à Nantes...',
    },
  ];

  const convertBeginDates = () => {
    const now = new Date();

    table.forEach(element => {
      const timestamp = element.timeStamp;
      const date = new Date(timestamp);

      const isToday = date.getDate() === now.getDate() &&
                      date.getMonth() === now.getMonth() &&
                      date.getFullYear() === now.getFullYear();

      const heures = date.getHours(); // Récupère l'heure (0-23)
      const minutes = date.getMinutes(); // Récupère les minutes (0-59)

      const heureFormatee = `${String(heures).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`

      const eventData: EventOutput = {
        event_id: element.event_id,
        image: element.image,
        event: element.event,
        tags: element.tags,
        heure_debut: heureFormatee,
        date_debut: date.getTime(),
        adresse: element.adresse,
        resumer: element.resumer,
      };

      if (isToday) {
        setListEventsToday((prev) => [...prev, eventData]);
      } else {
        setListEvents((prev) => [...prev, eventData]);
      }
    });

    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  };

  useEffect(() => {
    convertBeginDates();
  }, []);

  if (!isLoaded) {
    return (
      <view className="loading">
        <text>Chargement...</text>
      </view>
    );
  }

  return (
    <view className='accueil-container'>
      <view className='filterBar'>
        {/* Des éléments de filtrage ou autres éléments peuvent être ajoutés ici */}
      </view>
        <view>
          <text className='event-title event-position-array-title'>Quoi de neuf aujourd'hui</text>
        </view>
        <list
        scroll-orientation="vertical"
        list-type="single"
        span-count={1}
        style={{
          width: '100%',
          height: '100vh',
          listMainAxisGap: '5px',
          padding: '10px',
        }}
      >
        {listEventsToday.map((event) => (
          <list-item
            item-key={`list-item-${event.event_id}`}
            key={`list-item-${event.event_id}`}
          >
            <view className="event-item">
              <image src={event.image} className="event-image" />
              <view className="event-details">
                <text className="event-title">{event.event}</text>
                <text className="event-title title-date">{event.date_debut} à {event.heure_debut}</text>
              </view>
            </view>
          </list-item>
        ))}
        </list>
        <view>
          <text className='event-title'>Parcourir tout</text>
        </view>
        <list
        scroll-orientation="vertical"
        list-type="single"
        span-count={1}
        style={{
          width: '100%',
          height: '100vh',
          listMainAxisGap: '5px',
          padding: '10px',
        }}
      >
        {listEvents.map((event) => (
          <list-item
            item-key={`list-item-${event.event_id}`}
            key={`list-item-${event.event_id}`}
          >
            <view className="event-item">
              <image src={listEvents[0].image} className="event-image" />
              <view className="event-details">
                <text>{listEvents[0].event_id}</text>
                <text className="event-title">{listEvents[0].event}</text>
                <text className="event-title title-date">{event.date_debut} à {listEvents[0].heure_debut}</text>
              </view>
            </view>
          </list-item>
        ))}
      </list>
    </view>
  );
}

export default Accueil;
