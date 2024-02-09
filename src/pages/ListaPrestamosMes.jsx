import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PrestamosPorMes = () => {
  const [prestamos, setPrestamos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/prestamoMes');
        setPrestamos(response.data);
      } catch (error) {
        console.error('Error fetching prestamos:', error);
      }
    };

    fetchData();
  }, []);

  // Array para mapear números de mes a nombres de mes
  const nombresMeses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-secondary">Préstamos por Mes</h2>
      <table className="table table-striped table-dark">
        <thead>
          <tr >
            <th className="bg-primary text-light">Mes</th>
            <th className="bg-primary text-light">Año</th>
            <th className="bg-primary text-light">Cantidad de Préstamos</th>
            <th className="bg-primary text-light">Cliente</th>
            <th className="bg-primary text-light">Libro</th>
            <th className="bg-primary text-light">Autor</th>
          </tr>
        </thead>
        <tbody>
          {prestamos.map((prestamo, index) => (
            <tr key={index}>
              <td>{nombresMeses[prestamo.mes - 1]}</td> {/* Restamos 1 al número de mes porque los arrays comienzan desde 0 */}
              <td>{prestamo.año}</td>
              <td>{prestamo.cantidad_prestamos}</td>
              <td>{prestamo.cliente}</td>
              <td>{prestamo.libro}</td>
              <td>{prestamo.autor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrestamosPorMes;
