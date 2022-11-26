import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset} 
* {
  box-sizing: border-box; 
  font-family: 'Gothic A1', sans-serif;
}
body {
  font-family: 'Gothic A1', sans-serif;
  margin : 0;
  line-height : normal;
}
`;

export default GlobalStyles;
