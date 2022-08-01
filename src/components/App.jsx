import Profile from './Profile/Profile';
import user from '../social-profile/user';
import StatisticsList from './Statistics/StatisticsList';
import StatisticsNext from './Statistics/StatisticsNext';
import data from '../statistics/data';
import FriendsList from './Friends/FriendsList';
import friends from '../friend-list/friends.json';
import TransactionHistory from './transactions/TransactionHistory';
import transactions from '../transaction-history/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {/* <StatisticsList items={data}/> */}
      <StatisticsNext stats={data} />

      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
