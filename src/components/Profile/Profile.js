import { CardWrapper, ListCard, Image, TextCard, Username, StatsList, ListItem, Quantity } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <CardWrapper>
  <ListCard>
    <Image
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <Username>{username}</Username>
    <TextCard>{'@' + tag}</TextCard>
    <TextCard>{location}</TextCard>
  </ListCard>

  <StatsList>
    <ListItem>
      <TextCard>Followers</TextCard>
      <Quantity>{stats.followers}</Quantity>
    </ListItem>
    <ListItem>
      <TextCard>Views</TextCard>
      <Quantity>{stats.views}</Quantity>
    </ListItem>
    <ListItem>
      <TextCard>Likes</TextCard>
      <Quantity>{stats.likes}</Quantity>
    </ListItem>
  </StatsList>
</CardWrapper>
    )
};