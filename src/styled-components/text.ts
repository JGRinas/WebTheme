import styled from "styled-components";

export const Text = styled.div<{ $fontSize?: string }>`
  font-size: ${({ $fontSize = "25px" }) => $fontSize};
  color: #989898;
  font-weight: 300;
  margin: 0 10px;
`;

export const Title = styled(Text)`
  font-weight: 600;
  font-size: 18px;
`;
