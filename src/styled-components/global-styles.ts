import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        height: 100vh;
        background-color: #f1f1f1;
        transition: all 0.15s linear;
        margin: 0;
        font-family: "Roboto";
        font-weight: 300;
        padding: 15px;
    }
`;
