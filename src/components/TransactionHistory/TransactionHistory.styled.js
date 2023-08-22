import { styled } from "styled-components";

export const Wrap = styled.table`
width: 450px;
  margin: 0 auto;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  border-radius: 4px;
`;

export const HeadList = styled.tr`
display: flex;
gap: 1px;
`;

export const WrapTitle = styled.th`
font-size: 16px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  width: calc((100% - 2px ) / 3);
  color: #fff;
  background-color: #00ced1;
  padding: 10px;
  height: 20px;
`;

export const DataTable = styled.tbody`
background-color: #eee;
display: flex;
gap: 2px;
`;

export const DataTableItem = styled.td`
padding: 10px;
  height: 20px;
  text-align: center;
  width: calc((100% - 4px ) / 3);
  color: #808080;
  font-size: 16px;
`;