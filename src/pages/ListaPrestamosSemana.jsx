import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PrestamosPorSemana = () => {
  const [prestamos, setPrestamos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/prestamoSemana');
        setPrestamos(response.data);
      } catch (error) {
        console.error('Error fetching prestamos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-secondary">Préstamos por Semana</h2>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th className="bg-primary text-light">Semana</th>
            <th className="bg-primary text-light">Cantidad de Préstamos</th>
            <th className="bg-primary text-light">Fecha</th>
            <th className="bg-primary text-light">Cliente</th>
            <th className="bg-primary text-light">Libro</th>
            <th className="bg-primary text-light">Autor</th>
          </tr>
        </thead>
        <tbody>
          {prestamos.map((prestamo, index) => (
            <tr key={index}>
              <td>{prestamo.semana}</td>
              <td>{prestamo.cantidad_prestamos}</td>
              <td>{prestamo.fecha}</td>
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

export default PrestamosPorSemana;
