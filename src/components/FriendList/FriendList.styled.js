import { styled } from 'styled-components';

export const FriendsList = styled.ul`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 auto;
  padding: 20px 0px;
`;

export const ListItem = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 20px 10px;
  background-color: #fcfba0;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  border-radius: 4px;
`;

export const ColorStatus = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.$status) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'yellow';
    }
  }};
`;

export const TextName = styled.p`
  font-size: 24px;
`;
