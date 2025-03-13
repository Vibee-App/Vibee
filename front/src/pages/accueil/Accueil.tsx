import { useEffect, useState } from '@lynx-js/react';
import { fetchEvents } from "../../services/eventService.ts";
import './Accueil.css';

export interface Event {
  id: string;
  idCreateur: string;
  DateDebut: string;
  DateFin: string;
  Lieu: string;
  Adresse: string;
  Tags: string;
  Tarif: number;
  Description: string;
  Image: string;
  Nom: string;
  createdAt: string;
  updatedAt: string;
}

interface EventOutput {
  id: string;
  idCreateur: string;
  DateDebut: string;
  DateFin: string;
  Lieu: string;
  Adresse: string;
  Tags: string;
  Tarif: number;
  Description: string;
  Image: string;
  Nom: string;
  createdAt: string;
  updatedAt: string;
  heureDebut: string;
  resumer: string;
}

export function Accueil() {
  const [listEvents, setListEvents] = useState<EventOutput[]>([]);
  const [listEventsToday, setListEventsToday] = useState<EventOutput[]>([]);
  const [isLoaded, setLoaded] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const loadEvents = async () => {
      const data = await fetchEvents();
      setEvents(data);
      setLoading(false);
    };
    loadEvents();
  }, []);

  const convertBeginDates = () => { //Changes les donnée dates et stock dans 2 tableaux diffférents (Aujourd'hui et les autres jours)
    const now = new Date();
    const todayEvents: EventOutput[] = [];
    const upcomingEvents: EventOutput[] = [];

    events.forEach(element => {
      const timestamp = element.DateDebut;
      const date = new Date(timestamp);

      const isToday = date.getDate() === now.getDate() &&
                      date.getMonth() === now.getMonth() &&
                      date.getFullYear() === now.getFullYear();

      const newDate = date.getDate();
      const newMonth = date.getMonth(); // Renvoie un nombre de 0 à 11
      const newFullYear = date.getFullYear();

      // Tableau des mois en français
      const moisEnLettres = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
      ];
      const monthLettre = moisEnLettres[newMonth]; // Récupération correcte du mois

      const dateFormatee = `${newDate} ${monthLettre} ${newFullYear}`;

      const heures = date.getHours();
      const minutes = date.getMinutes();
      const heureFormatee = `${String(heures).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

      const eventData: EventOutput = {
        id: element.id,
        idCreateur: element.idCreateur,
        Image: element.Image,
        Nom: element.Nom,
        Tags: element.Tags,
        Tarif: element.Tarif,
        heureDebut: heureFormatee,
        DateDebut: dateFormatee,
        DateFin: element.DateFin,
        Adresse: element.Adresse,
        Lieu: element.Lieu,
        Description: element.Description,
        createdAt: element.createdAt,
        updatedAt: element.updatedAt,
        resumer: ""
      };

      if (isToday === true) {
        todayEvents.push(eventData); //Stock les events d'aujourd'hui
      } else if(isToday === false){
        upcomingEvents.push(eventData); //Stock les autres events
      }
    });

    setListEventsToday(todayEvents);
    setListEvents(upcomingEvents);
    setLoaded(true);
  };

  useEffect(() => { //Lance la conversion des données lors de l'arrivée d'évènement
    if (events.length > 0) {
      convertBeginDates();
    }
  }, [events]);

  if (!isLoaded) {
    return (
      <view className="loading">
        <text>Chargement...</text>
      </view>
    );
  }

  return (
    <view className='accueil-container'>
      <scroll-view
      scroll-orientation="vertical"
      style={{ width: "calc(100% - 10px)", height: "100vh", paddingLeft: "5px", borderRadius: "10px" }}
      >
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
                item-key={`list-item-${event.id}`}
                key={`list-item-${event.id}`}
              >
                <view className="event-item">
                  <image src={event.Image} className="event-image" />
                  <text className="event-title">{event.Nom}</text>
                  <text className="event-title title-date">{event.DateDebut} à {event.heureDebut}</text>
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
          {listEventsToday.map((event2) => (
            <list-item
              item-key={`list-item-${event2.id}`}
              key={`list-item-${event2.id}`}
            >
              <view className="event-item">
                <image src={event2.Image} className="event-image" />
                <text className="event-title">{event2.Nom}</text>
                <text className="event-title title-date">{event2.DateDebut} à {event2.heureDebut}</text>
              </view>
            </list-item>
          ))}
        </list>
      </scroll-view>
    </view>
  );
}

export default Accueil;
