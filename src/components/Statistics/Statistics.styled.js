import { styled } from "styled-components";

export const Wrap = styled.section`
margin: 0 auto;
  padding: 50px 0;
  max-width: 350px;
`;

export const Title = styled.h2`
text-align: center;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 400;
  color: #808080;
padding: 20px 0;
`;

export const StatsList = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
`;

export const StatsListItem = styled.li`
 width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: #fff;
  padding: 10px 0;
  background-color: ${props => {
    return `#${Math.floor((Math.random() * 1677215) / props.color)
      .toString(16)
      .padStart(6, 0)}`;
  }};
`;

export const TextStats = styled.span`
font-size: 24px;
`;