import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/404";
import Header from "./components/Header";
import Requirements from "./pages/Requirements";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
