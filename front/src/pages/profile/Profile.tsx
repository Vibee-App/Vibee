import React from 'react';
import './Profile.css';
import Button from '../../components/button/Button.tsx';

interface UserProfile {
  name: string;
  age: number;
  email: string;
  avatarUrl: string;
}

const mockUser: UserProfile = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
  avatarUrl: 'https://picsum.photos/200/200',
};

const Profile: React.FC = () => {

  return (
    <scroll-view className="container">
      <text className="title">User Profile</text>
      <image className="avatar" src={mockUser.avatarUrl} />
      <text className="label">Name:</text>
      <text className="value">{mockUser.name}</text>
      <text className="label">Age:</text>
      <text className="value">{mockUser.age}</text>
      <text className="label">Email:</text>
      <text className="value">{mockUser.email}</text>
      <Button text="Home" route="/" dark="true" />
    </scroll-view>
  );
};
export default Profile;
