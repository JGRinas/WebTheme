import { ThemeProvider } from "styled-components";
import Button from "../components/buttons";
import Card from "../components/card";
import { Column } from "../styled-components/column";
import { GlobalStyles } from "../styled-components/global-styles";
import { Text } from "../styled-components/text";

const Home = () => {
  return (
    <ThemeProvider theme={{}}>
    <GlobalStyles />
      <Column>
        <Text> Weekly Stats - Juan Dev </Text>
        <Button handleClick={() => {}} />
      </Column>
      <Column>
        <Card title="Marketing" text="25%" />
        <Card title="Conversion" text="4.3M" />
        <Card title="Users" text="+20M" />
      </Column>
      <Column>
        <Card title="Sales" height="120px" text="$0.00" />
      </Column>
    </ThemeProvider>
  );
};

export default Home;
