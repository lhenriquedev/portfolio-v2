import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext";

import "./styles/global.scss";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
