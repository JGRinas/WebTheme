import styled from "styled-components";

export const StyledButton = styled.button`
  background: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.text2};
  color: ${({ theme }) => theme.colors.text2};
  border-radius: 5px;
  font-size: 15px;
`;
