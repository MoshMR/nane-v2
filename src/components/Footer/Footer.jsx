import React from 'react';
import './Footer.css';

function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por suscribirte! 📧');
  };

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="logo-container" style={{ marginBottom: '1.5rem' }}>
              <div className="logo-circle" style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #eab308 100%)',
              }}>
                J
              </div>
              <div className="logo-text" style={{ color: '#d4af37' }}>Jandiara</div>
            </div>
            <p style={{ color: '#9ca3af', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              ✨ Joyas de Plata ✨ <br />
              Siéntete libre de usarlas 🌺
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/Jandiarajoyas" target="_blank" rel="noopener noreferrer" className="social-btn">📘</a>
              <a href="https://www.instagram.com/jandiara.joyas" target="_blank" rel="noopener noreferrer" className="social-btn">📷</a>
              <a href="#" className="social-btn">🐦</a>
              <a href="#" className="social-btn">▶️</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#inicio">→ Inicio</a></li>
              <li><a href="#productos">→ Productos</a></li>
              <li><a href="#colecciones">→ Colecciones</a></li>
              <li><a href="#nosotros">→ Nosotros</a></li>
              <li><a href="#contacto">→ Contacto</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Información</h4>
            <ul>
              <li><a href="#">→ Términos y Condiciones</a></li>
              <li><a href="#">→ Política de Privacidad</a></li>
              <li><a href="#">→ Envíos y Devoluciones</a></li>
              <li><a href="#">→ Preguntas Frecuentes</a></li>
              <li><a href="#">→ Guía de Tallas</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <div style={{ color: '#9ca3af', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '1rem' }}>
                <span style={{ color: '#d4af37', fontSize: '1.25rem' }}>📍</span><br />
                <strong style={{ color: 'white' }}>Dirección:</strong><br />
                Av. Cobayada 1234<br />
                Santiago de Surco, Lima 15074<br />
                Perú
              </p>
              <p style={{ marginBottom: '1rem' }}>
                <span style={{ color: '#d4af37', fontSize: '1.25rem' }}>📞</span><br />
                <strong style={{ color: 'white' }}>Teléfono:</strong><br />
                +51 985 431 496
              </p>
              <p>
                <span style={{ color: '#d4af37', fontSize: '1.25rem' }}>✉️</span><br />
                <strong style={{ color: 'white' }}>Email:</strong><br />
                hola@jandiarajoyas.com
              </p>
            </div>
          </div>
        </div>

        <div className="newsletter">
          <h3>Suscríbete a nuestro Newsletter</h3>
          <p>Recibe ofertas exclusivas y nuevos productos ✨</p>
          <form onSubmit={handleNewsletterSubmit}>
            <input type="email" placeholder="tu@email.com" required />
            <button type="submit">Suscribirme</button>
          </form>
        </div>

        <div className="payment-methods">
          <h5>Métodos de Pago</h5>
          <div className="payment-grid">
            <div className="payment-item">💳 Visa</div>
            <div className="payment-item">💳 Mastercard</div>
            <div className="payment-item">📱 Yape</div>
            <div className="payment-item">📱 Plin</div>
            <div className="payment-item">🏦 Transferencia</div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2025 <span className="highlight">Jandiara.Joyas</span>. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
