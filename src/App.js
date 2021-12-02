import Profile from "./components/Profile/Profile.js";
import Statistics from "./components/Statistics/Statistics.js";
import FriendList from "./components/FriendList/FriendList.js";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.js";
import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
