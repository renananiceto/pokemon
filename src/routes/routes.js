import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: red;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
