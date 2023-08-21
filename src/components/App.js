import { FriendList } from "./FriendList";
// import { FriendListItem } from "./FriendListItem";
import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import { TransactionHistory } from "./TransactionHistory";

import userItems from "../user-items.json";
import data from "../data.json"
import friends from "../friends.json"
import transactionItems from "../transactions.json"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile items={userItems.username}
        tag={userItems.tag}
        location={userItems.location}
        avatar={userItems.avatar}
        stats={userItems.stats}/>
      <Statistics title="Upload stats" stats={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactionItems}/>
    </div>
  );
};
