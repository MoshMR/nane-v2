import React from 'react';
import './Navbar.css';

function Navbar({ cartCount }) {
  return (
    <nav>
      <div className="nav-content">
        <div className="logo-container">
          <div className="logo-circle">J</div>
          <div className="logo-text">Jandiara Joyas</div>
        </div>

        <div className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#productos">Productos</a>
          <a href="#colecciones">Colecciones</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="nav-icons">
          <button className="icon-btn">
            <img src="assets/images/shopping-cart.png" alt="Carrito" style={{ width: '1.5rem', height: '1.5rem' }} />
            <span className="cart-badge" id="cartBadge">{cartCount}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
