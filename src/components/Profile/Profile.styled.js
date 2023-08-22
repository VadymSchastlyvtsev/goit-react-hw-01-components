import styled from 'styled-components'

export const CardWrapper = styled.div`
border: 1px solid #c0c0c0;
  width: 350px;
  margin: 0px auto;
  padding-top: 50px;
  border-radius: 8px;
  text-align: center;
 box-shadow: 0px 0px 5px black;
`;

export const ListCard = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

export const Image = styled.img`
width: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  border: 1px solid #dfdfdf;
`;

export const TextCard = styled.p`
color: #808080;

`;

export const Username = styled.h2`
font-size: 32px;

`;

export const StatsList = styled.ul`
list-style: none;
display: flex;


`;

export const ListItem = styled.li`
display: flex;
  flex-direction: column;
  flex-basis: 33%;
  align-items: center;
  padding: 10px 0px;
  border: 1px solid #c0c0c0;
  background-color: #f0f8ff;
`;

export const Quantity = styled.span`
color: #000;
  font-size: 20px;
  font-weight: bold;
  margin-top: 8px;
`;