import Layout from "./components/Layout";
import "./App.css";
import themeContext from "./context/themeContext";
import { useContext, useEffect } from "react";
import { ThemeProvider } from "./context/themeContext";

function App() {
 
  useEffect(() => {
    document.title = "Dopamine ads"
 }, []);

  return (
    <ThemeProvider>
      <div className="App">
    
        <Layout />
      </div>
    </ThemeProvider>

  );
}

export default App;
