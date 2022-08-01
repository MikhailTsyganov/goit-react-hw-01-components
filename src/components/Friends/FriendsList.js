import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem';
import s from './FriendsList.module.css';

export default function FriendsList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
