import React, { useEffect, useState } from "react";
import { fetchEvents, Event } from "../../services/eventService";

const Events: React.FC = () => {
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

  if (loading) {
    return <text>Chargement des événements...</text>;
  }

  return (
    <view>
      <text>Liste des événements</text>
      {events.length === 0 ? (
        <text>Aucun événement disponible.</text>
      ) : (
        <view>
          {events.map((event) => (
            <view key={event.id} style={{ marginBottom: "10px", border: "10px solid #ccc", padding: "10px" }}>
              <text>{event.Nom}</text>
              <text>Date :{new Date(event.DateDebut).toLocaleDateString()} - {new Date(event.DateFin).toLocaleDateString()}</text>
              <text>Lieu :{event.Lieu}</text>
              <text>Description :{event.Description}</text>
              <text>Tarif :{event.Tarif}€</text>
              <text>Tags :{event.Tags}</text>
              <image src={event.Image} style={{ maxWidth: "200px", borderRadius: "5px" }} />
            </view>
          ))}
        </view>
      )}
    </view>
  );
};

export default Events;
