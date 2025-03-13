import homeIcon from '../../assets/icons/home.svg';
import pencilIcon from '../../assets/icons/pencil.svg';
import plusIcon from '../../assets/icons/plus.svg';
import calendarIcon from '../../assets/icons/calendar.svg';
import userIcon from '../../assets/icons/user.svg';

import './Icons.css';

export function HomeIcon() {
  return <image src={homeIcon} className="icon" />;
}

export function PencilIcon() {
  return <image src={pencilIcon} className="icon" />;
}

export function PlusIcon() {
  return <image src={plusIcon} className="icon" />;
}

export function CalendarIcon() {
  return <image src={calendarIcon} className="icon" />;
}

export function UserIcon() {
  return <image src={userIcon} className="icon" />;
}
