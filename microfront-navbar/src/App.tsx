import { ThemeProvider } from "@suit-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider>
      <Navbar />;
    </ThemeProvider>
  );
}

export default App;
