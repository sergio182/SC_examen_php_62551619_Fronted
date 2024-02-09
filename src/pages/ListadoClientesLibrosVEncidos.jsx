import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientesConLibrosVencidos = () => {
  const [clientesConLibrosVencidos, setClientesConLibrosVencidos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/vencidos');
        setClientesConLibrosVencidos(response.data);
      } catch (error) {
        console.error('Error al obtener la lista de clientes con libros vencidos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className=" text-center mb-4 text-secondary">Clientes con Libros Vencidos</h2>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col" className="bg-primary text-light">Nombre</th>
            <th scope="col" className="bg-primary text-light">Email</th>
            <th scope="col" className="bg-primary text-light">Celular</th>
          </tr>
        </thead>
        <tbody>
          {clientesConLibrosVencidos.map(cliente => (
            <tr key={cliente.id}>
              <td>{cliente.name}</td>
              <td>{cliente.email}</td>
              <td>{cliente.celular}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientesConLibrosVencidos;
