import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";
import s from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <div className={s.listContainer}>
      <ul className={s.friendList}>
        {friends.map((item) => (
          <li key={item.id} className={s.item}>
            <FriendListItem
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
