import styled from '@emotion/styled';

export const Transacrions = styled.table`
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;
  width: 750px;
  background-color: var(--bg);
  box-shadow: var(--main-shadow);
  border-radius: 10px;
`;

export const TableHeader = styled.thead`
  margin-bottom: 20px;
  width: 100%;
  display: block;
  box-shadow: var(--main-shadow);
  border-radius: 5px;
`;

export const HeaderRow = styled.tr`
  padding: 15px 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const HeaderTitle = styled.th`
  /* flex-basis: 33.333%; */
  font-weight: 700;
  font-size: 24px;
  color: var(--accent);
  text-align: left;
  text-shadow: var(--main-shadow);
`;

export const TableBody = styled.tbody`
  width: 100%;
  display: block;
`;

export const BodyRow = styled.tr`
  
  display: flex;
  padding-left: 80px;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: var(--main-shadow);
  border-radius: 10px;
`;

export const BodyValue = styled.td`
  padding: 15px;
  flex-basis: 33.333%;
  font-weight: 500;
  color: var(--secondary);
  text-shadow: var(--main-shadow);
`;