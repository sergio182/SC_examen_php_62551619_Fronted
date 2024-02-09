import React from 'react';
import imagenBiblioteca from './../img/1707441076291.jpg'; // Importar la imagen

const Principal = () => {
  return (
    <div className="mt-4 container bg-dark "><div className=" px-2 py-2">
      <h1 className="text-center text-secondary">Bienvenido a la Biblioteca Hansa</h1>
      <p className="text-center text-info">
        Este es un sitema que te permite ver reportes de libros y clientes
      </p>
      <div className="text-center">
        <img src={imagenBiblioteca} alt="Imagen Biblioteca" className="img-fluid" style={{ maxWidth: '400px' }} />
      </div>
      </div>
    </div>
  );
};

export default Principal;
