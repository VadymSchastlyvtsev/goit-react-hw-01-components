import {
  Wrap,
  Title,
  StatsList,
  StatsListItem,
  TextStats,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Wrap>
      {title ? <Title>{title}</Title> : ''}

      <StatsList>
        {stats.map(item => {
          return (
            <StatsListItem key={item.id} $color={item.percentage}>
              <TextStats>{item.label}</TextStats>
              <TextStats>{item.percentage + '%'}</TextStats>
            </StatsListItem>
          );
        })}
      </StatsList>
    </Wrap>
  );
};
