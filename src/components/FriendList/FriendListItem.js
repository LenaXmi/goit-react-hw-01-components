import PropTypes from "prop-types";
import s from "./FriendList.module.css";
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span
        className={s.status}
        style={
          isOnline ? { backgroundColor: "green" } : { backgroundColor: "red" }
        }
      >
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

//   "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
//     "name": "Mango",
//     "isOnline": true,
//     "id": 1812

// className={s.status} style={isOnline?{color:'green'}:{color:'red'}}
