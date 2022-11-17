import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <BrowserRouter>
        <Login />
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
