import { Wrap, Title, StatsList, StatsListItem, TextStats } from "./Statistics.styled";

export const Statistics = ({title, stats}) => {
    return (
        <Wrap className="statistics">
  <Title className="title">{title}</Title>

  <StatsList className="stat-list">
    {stats.map(item => {
        return (
        <StatsListItem className="item" key={item.id} color={item.percentage}>
      <TextStats className="label">{item.label}</TextStats>
      <TextStats className="percentage">{item.percentage + '%'}</TextStats>
    </StatsListItem>
        );
    })}
  </StatsList>
</Wrap>
    )
};