import React from 'react';
import './Features.css';

function Features() {
  return (
    <div className="features">
      <div className="feature-card">
        <div className="feature-icon primary">
          <img src="assets/images/shield.png" alt="Calidad"
            style={{ width: '2.5rem', height: '2.5rem' }} />
        </div>
        <h3>Calidad Garantizada</h3>
        <p>Productos auténticos y de la más alta calidad</p>
      </div>

      <div className="feature-card">
        <div className="feature-icon accent">
          <img src="assets/images/package.png" alt="Empaque"
            style={{ width: '2.5rem', height: '2.5rem' }} />
        </div>
        <h3>Empaque Especial</h3>
        <p>Cada producto viene en un empaque único</p>
      </div>

      <div className="feature-card">
        <div className="feature-icon secondary">
          <img src="assets/images/truck.png" alt="Envío"
            style={{ width: '2.5rem', height: '2.5rem' }} />
        </div>
        <h3>Envío Rápido</h3>
        <p>Envío gratis en Lima en compras mayores a S/ 100</p>
      </div>
    </div>
  );
}

export default Features;
