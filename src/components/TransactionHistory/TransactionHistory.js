import {
  Wrap,
  WrapTitle,
  DataTable,
  DataTableItem,
  HeadList,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Wrap>
      <thead>
        <HeadList>
          <WrapTitle>Type</WrapTitle>
          <WrapTitle>Amount</WrapTitle>
          <WrapTitle>Currency</WrapTitle>
        </HeadList>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <DataTable key={item.id}>
              <DataTableItem>{item.type}</DataTableItem>
              <DataTableItem>{item.amount}</DataTableItem>
              <DataTableItem>{item.currency}</DataTableItem>
            </DataTable>
          );
        })}
      </tbody>
    </Wrap>
  );
};
