import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/404";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
