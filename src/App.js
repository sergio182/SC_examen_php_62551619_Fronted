import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientesConLibrosVencidos from "./pages/ListadoClientesLibrosVEncidos";
import PrestamosPorSemana from "./pages/ListaPrestamosSemana";
import PrestamosPorMes from "./pages/ListaPrestamosMes";
import Navegacion from "./menu/Navegacion";
function App() {
  return (
    <div className="container text-center">
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route exact path="/" element={<ClientesConLibrosVencidos />} />{" "}
          <Route exact path="/vencidos" element={<ClientesConLibrosVencidos />} />{" "}
          <Route exact path="/semana" element={<PrestamosPorSemana />} />{" "}
          <Route exact path="/mes" element={<PrestamosPorMes />} />{" "}
          
        </Routes>{" "}
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
