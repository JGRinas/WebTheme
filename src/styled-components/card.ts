import styled from "styled-components";

export const WrapperCard = styled.div<{ width?: string; height?: string }>`
  width: ${({ width = "200px" }) => width};
  height: ${({ height = "120px" }) => height};
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 2px;
  margin: 5px;
  flex-grow: 1;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 10px;
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
`;

export const Info = styled.div`
  color: ${({ theme }) => theme.colors.text2};
  font-weight: 300;
  font-size: 70px;
`;
