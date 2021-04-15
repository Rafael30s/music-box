import Nav from "./components/Nav"; // Importando o componente Nav
import Music from "./pages/Music.jsx";
import Home from "./pages/Home.jsx";
import AddMusic from "./pages/AddMusic.jsx";
import NotFound from "./pages/NotFound.jsx";
import Routers from "./routes/routes";

// Exporta e cria o componente App
export default function App() {
  return (
    <>
    <Nav />
      <Routers/>
    </>);
}

// Exporta o componente App
// export default App
