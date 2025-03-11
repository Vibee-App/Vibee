import type React from 'react';

export const EventCard: React.FC<{ title: string; description: string; }> = ({ title, description }) => (
    <view className="card">
        <text>{title}</text>
        <text>{description}</text>
    </view>
);
