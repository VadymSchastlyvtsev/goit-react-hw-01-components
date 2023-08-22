import { FriendsList, FriendsListItem, ColorStatus, TextName } from "./FriendList.styled";

export const FriendList = ({friends}) => {
    return (
        <FriendsList>
            {friends.map(friend => {
                return (<FriendsListItem key={friend.id}>
                    <ColorStatus status={friend.isOnline}></ColorStatus>
  <img className="avatar" 
  src={friend.avatar} 
  alt={friend.name} 
  width="48" />
  <TextName className="name">{friend.name}</TextName>
                </FriendsListItem>)
                
})}
        </FriendsList>
    )
};