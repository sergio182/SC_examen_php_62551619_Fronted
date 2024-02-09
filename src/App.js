import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientesConLibrosVencidos from "./pages/ListadoClientesLibrosVEncidos";
import Principal from "./pages/Principal";
import PrestamosPorSemana from "./pages/ListaPrestamosSemana";
import PrestamosPorMes from "./pages/ListaPrestamosMes";
import Navegacion from "./menu/Navegacion";
function App() {
  return (
    <div className="container text-center">
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route exact path="/" element={<Principal />} />{" "}
          <Route exact path="/vencidos" element={<ClientesConLibrosVencidos />} />{" "}
          <Route exact path="/semana" element={<PrestamosPorSemana />} />{" "}
          <Route exact path="/mes" element={<PrestamosPorMes />} />{" "}
          
        </Routes>{" "}
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
