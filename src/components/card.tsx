import { useContext } from "react";
import { Info, WrapperCard } from "../styled-components/card";
import { Title } from "../styled-components/text";
import { ThemeContext } from "styled-components";

interface ICard {
  title: string;
  height: string;
  text: string;
}

const Card = ({ title, height, text }: ICard) => {
  const themeContext = useContext(ThemeContext);
  console.log(themeContext);
  return (
    <WrapperCard height={height}>
      <Title>{title}</Title>
      <Info>{text}</Info>
    </WrapperCard>
  );
};

export default Card;
