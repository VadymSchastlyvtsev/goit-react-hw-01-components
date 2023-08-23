import { ColorStatus, TextName, ListItem } from './FriendList.styled';

export const FriendListItem = ({ item: { isOnline, avatar, name } }) => {
  return (
    <ListItem>
      <ColorStatus $status={isOnline}></ColorStatus>
      <img src={avatar} alt={name} width="48" />
      <TextName>{name}</TextName>
    </ListItem>
  );
};
