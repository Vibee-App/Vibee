import React from 'react';
import { EventCard } from '../../components/eventCard/EventCard.jsx';

const events = [
  { id: 1, title: 'Event 1', description: 'Description for event 1' },
  { id: 2, title: 'Event 2', description: 'Description for event 2' },
  { id: 3, title: 'Event 3', description: 'Description for event 3' },
];

const Events: React.FC = () => (
  <view className="events">
    {events.map((event) => (
      <EventCard
        key={event.id}
        title={event.title}
        description={event.description}
      />
    ))}
  </view>
);

export default Events;
