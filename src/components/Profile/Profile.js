import { CardWrapper, ListCard, Image, TextCard, Username, StatsList, ListItem, Quantity } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <CardWrapper className="profile">
  <ListCard className="description">
    <Image
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <Username className="name">{username}</Username>
    <TextCard className="tag">{'@' + tag}</TextCard>
    <TextCard className="location">{location}</TextCard>
  </ListCard>

  <StatsList className="stats">
    <ListItem>
      <TextCard className="label">Followers</TextCard>
      <Quantity className="quantity">{stats.followers}</Quantity>
    </ListItem>
    <ListItem>
      <TextCard className="label">Views</TextCard>
      <Quantity className="quantity">{stats.views}</Quantity>
    </ListItem>
    <ListItem>
      <TextCard className="label">Likes</TextCard>
      <Quantity className="quantity">{stats.likes}</Quantity>
    </ListItem>
  </StatsList>
</CardWrapper>
    )
};