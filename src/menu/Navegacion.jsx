import React from "react";
import {Link} from 'react-router-dom';

export default function Navegacion() {
  return (
    <div className='container'>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">Biblioteca Hansa</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="/">Inicio</a>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/vencidos">Clientes-Libros-vencidos</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/semana">Prestamos por Semana</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/mes">Prestamos por Mes</Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
    </div>
  );
}