

export const FriendList = ({friends}) => {
    return (
        <ul>
            {friends.map(friend => {
                return (<li key={friend.id}>
                    <span status={friend.isOnline}></span>
  <img className="avatar" 
  src={friend.avatar} 
  alt={friend.name} 
  width="48" />
  <p className="name">{friend.name}</p>
                </li>)
                
})}
        </ul>
    )
};