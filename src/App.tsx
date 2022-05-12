import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>home</h1>} />
          <Route path="/new" element={<h1>new</h1>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
