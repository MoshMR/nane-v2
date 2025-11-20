import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <div className="hero-text animate-fade-in-up">
          <div className="badge">
            <span>✨</span>
            <span>Nueva Colección</span>
          </div>

          <h1>
            La magia está en los <span className="gradient-text">detalles</span>
          </h1>

          <p>
            ¡Bienvenida! Joyería de plata, inspirada en la belleza y esencia de
            la mujer. ✨
          </p>

          <div className="hero-buttons">
            <a href="#productos" className="btn-primary">Explorar Colección</a>
            <a href="#nosotros" className="btn-secondary">Nuestra Historia</a>
          </div>

          <div className="stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Clientes Felices</p>
            </div>
            <div className="stat">
              <h3>95%</h3>
              <p>Plata</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Soporte</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-card">
            <div className="hero-card-content">
              <div className="hero-card-inner">
                <div className="emoji-circle">
                  <img src="assets/images/evil-eye.png" alt="Ojo Turco"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3>Ojo Turco</h3>
                <p>Amuleto de Protección</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
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
      </div>
    </section>
  );
}

export default Hero;
