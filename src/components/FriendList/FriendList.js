import { FriendsList } from './FriendList.styled';

import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem item={friend} />
          </li>
        );
      })}
    </FriendsList>
  );
};
