import React from 'react';
import Router from 'Router';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from 'atoms';
import { darkTheme, lightTheme } from 'theme';
import TodoList from 'TodoList';

const GlobalStyle = createGlobalStyle`
  * { 
    box-sizing: border-box;
    margin : 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  a {
    text-decoration: none;
    color: inherit
  }

  li {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor}
  }
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      <GlobalStyle />
      <TodoList />
      {/* <Router /> */}
    </>
  );
}

export default App;
