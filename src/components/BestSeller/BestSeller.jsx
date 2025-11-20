import React from 'react';
import './BestSeller.css';

function BestSeller({ addToCart }) {
  const bestSellerProduct = {
    id: 1,
    name: "Pulsera Ojo Turco Clásica",
    price: 45,
    oldPrice: 60,
    image: "assets/images/evil-eye.png"
  };

  const handleAddToCart = () => {
    addToCart(bestSellerProduct);
    alert('¡Producto agregado al carrito! 🛒');
  };

  return (
    <section id="colecciones" className="bestseller">
      <div className="container">
        <div className="section-header">
          <div className="badge" style={{ margin: '0 auto 1.5rem' }}>
            <span>⭐</span>
            <span>BEST SELLER</span>
          </div>
          <h2>Amuleto de protección</h2>
          <h3>OJO TURCO 🧿</h3>
          <p style={{
            maxWidth: '48rem',
            margin: '0 auto',
            color: '#6b7280',
            fontSize: '1.25rem',
          }}>
            Nuestro producto más vendido, elegido por cientos de clientes
            satisfechos
          </p>
        </div>

        <div className="bestseller-content">
          <div className="bestseller-image">
            <div className="bestseller-card">
              <div className="bestseller-card-content">
                <div className="bestseller-inner">
                  <div className="bestseller-emoji">
                    <img src="assets/images/evil-eye.png" alt="Ojo Turco"
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div className="stars">
                    <span className="star"><img src="assets/images/star.png" alt="Estrella"
                      style={{ width: '1.5rem', height: '1.5rem' }} /></span>
                    <span className="star"><img src="assets/images/star.png" alt="Estrella"
                      style={{ width: '1.5rem', height: '1.5rem' }} /></span>
                    <span className="star"><img src="assets/images/star.png" alt="Estrella"
                      style={{ width: '1.5rem', height: '1.5rem' }} /></span>
                    <span className="star"><img src="assets/images/star.png" alt="Estrella"
                      style={{ width: '1.5rem', height: '1.5rem' }} /></span>
                    <span className="star"><img src="assets/images/star.png" alt="Estrella"
                      style={{ width: '1.5rem', height: '1.5rem' }} /></span>
                  </div>
                  <p>Calificación 5.0 (250+ reseñas)</p>
                </div>
              </div>
            </div>

            <div className="badge-hot">¡Más vendido!</div>
            <div className="badge-discount">-25% OFF</div>
          </div>

          <div className="bestseller-info">
            <div className="info-card">
              <div className="info-icon">
                <img src="assets/images/shield.png" alt="Protección"
                  style={{ width: '2rem', height: '2rem' }} />
              </div>
              <div>
                <h4>Protección Ancestral</h4>
                <p>
                  El ojo turco es un amuleto ancestral que protege contra la
                  envidia y las malas vibras, ayudándote a mantener tu energía
                  limpia y en equilibrio. ✨🧿
                </p>
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
            }}>
              <div style={{
                textAlign: 'center',
                padding: '1rem',
                background: 'linear-gradient(135deg, #bfdbfe 0%, #a5f3fc 100%)',
                borderRadius: '0.75rem',
              }}>
                <p style={{
                  fontSize: '1.875rem',
                  fontWeight: 'bold',
                  color: '#8b7355',
                  marginBottom: '0.25rem',
                }}>
                  100%
                </p>
                <p style={{ fontSize: '0.875rem', color: '#374151', fontWeight: '500' }}>
                  Auténtico
                </p>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '1rem',
                background: 'linear-gradient(135deg, #e9d5ff 0%, #fce7f3 100%)',
                borderRadius: '0.75rem',
              }}>
                <p style={{
                  fontSize: '1.875rem',
                  fontWeight: 'bold',
                  color: '#8b7355',
                  marginBottom: '0.25rem',
                }}>
                  Único
                </p>
                <p style={{ fontSize: '0.875rem', color: '#374151', fontWeight: '500' }}>
                  Diseño Exclusivo
                </p>
              </div>
            </div>

            <div className="price-card">
              <div className="price-header">
                <div>
                  <p style={{
                    fontSize: '0.875rem',
                    opacity: '0.9',
                    marginBottom: '0.25rem',
                  }}>
                    Precio especial:
                  </p>
                  <div style={{ display: 'flex', alignItems: 'baseline' }}>
                    <span className="price-main">S/ 45</span>
                    <span className="price-old">S/ 60</span>
                  </div>
                </div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '0.75rem 1rem',
                  borderRadius: '9999px',
                  backdropFilter: 'blur(4px)',
                }}>
                  <p style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    marginBottom: '0.25rem',
                  }}>
                    Ahorras
                  </p>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>S/ 15</p>
                </div>
              </div>

              <button className="add-to-cart" onClick={handleAddToCart}>
                <img src="assets/images/shopping-cart.png" alt="Carrito"
                  style={{ width: '1.5rem', height: '1.5rem', display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} />
                Agregar al Carrito
              </button>

              <p className="price-note">
                🚚 Envío gratis en Lima | 🎁 Empaque especial incluido
              </p>
            </div>

            <div className="benefits">
              <div className="benefit">
                <div className="benefit-emoji">
                  <img src="assets/images/diamond.png" alt="Premium"
                    style={{ width: '2rem', height: '2rem' }} />
                </div>
                <p>Premium Quality</p>
              </div>
              <div className="benefit">
                <div className="benefit-emoji">
                  <img src="assets/images/sparkle.png" alt="Energizado"
                    style={{ width: '2rem', height: '2rem' }} />
                </div>
                <p>Energizado</p>
              </div>
              <div className="benefit">
                <div className="benefit-emoji">
                  <img src="assets/images/gift.png" alt="Regalo"
                    style={{ width: '2rem', height: '2rem' }} />
                </div>
                <p>Regalo Ideal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSeller;
