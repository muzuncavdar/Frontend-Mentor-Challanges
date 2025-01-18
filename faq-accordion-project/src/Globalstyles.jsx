import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *, *::before, *::after {
    box-sizing: border-box;
    }

    * {
    margin: 0;
    }

    body {
    -webkit-font-smoothing: antialiased;
    }      
`

export default GlobalStyles;
