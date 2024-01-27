import { StyledButton } from "../styled-components/buttons";

const Button = ({ handleClick }: { handleClick: () => void }) => {
  return <StyledButton onClick={handleClick}>Toggle Theme</StyledButton>;
};

export default Button;
