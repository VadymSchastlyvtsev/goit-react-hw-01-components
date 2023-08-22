import { FriendList } from "./FriendList/FriendList";
import { GlobalStyle } from "./GlobalStyled";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import userItems from "../user-items.json";
import data from "../data.json"
import friends from "../friends.json"
import transactionItems from "../transactions.json"

export const App = () => {
  return (
    <div>
      <Profile username={userItems.username}
        tag={userItems.tag}
        location={userItems.location}
        avatar={userItems.avatar}
        stats={userItems.stats}/>
      <Statistics title="Upload stats" stats={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactionItems}/>
      <GlobalStyle/>
    </div>
  );
};
