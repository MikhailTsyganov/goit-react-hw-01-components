import PropTypes from 'prop-types';
import s from './FriendsListItem.module.css';

export default function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span
        className={`${s.status} ${isOnline ? s.isActive : s.isNotActive}`}
      ></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
