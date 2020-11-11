import {createGlobalStyle} from 'styled-components';
export const GlobalStyles=createGlobalStyle`
  body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    transition: all 0.50s linear;
  }
  .border {
    border: .2em solid ${({theme}) => theme.toggleBorder};
  }
  .viewport {
    background: ${({theme}) => theme.viewport};
    transition: all 0.50s linear;
  }
  .question {
    color: ${({theme}) => theme.text};
    transition: all 0.50s linear;
  }
  .link {
     color: ${({theme}) => theme.startLink};
    transition: all 0.50s linear;
  }
  .main-link:visited {
    color: ${({theme}) => theme.startLink}
  }
  .headerLink {
    color: ${({theme}) => theme.headerText};
    text-shadow: ${({theme}) => theme.glow};
    transition: all 0.50s linear;
  }
  .headerLink:visited, a:visited {
    color: ${({theme}) => theme.headerText};
    transition: all 0.50s linear;
  }
`
