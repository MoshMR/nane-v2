import React from 'react';

function ProductCard({ product, addToCart }) {
  const handleAddToCart = () => {
    addToCart(product);
    alert(`¡${product.name} agregado al carrito! 🛒`);
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <span key={index} className="star">
        <img
          src="assets/images/star.png"
          alt="Estrella"
          style={{ width: '1rem', height: '1rem', opacity: index < rating ? 1 : 0.3 }}
        />
      </span>
    ));
  };

  return (
    <div className="product-card" data-category={product.category}>
      <div className="product-image">
        <img src={product.image} alt={product.name} className="product-emoji" />
        {product.discount && (
          <div className="product-badge">-{product.discount}%</div>
        )}
      </div>
      <div className="product-info">
        <div className="product-rating">
          {renderStars(product.rating)}
          <span>({product.reviews})</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-footer">
          <div>
            <span className="product-price">S/ {product.price}</span>
            {product.oldPrice && (
              <span className="product-price-old">S/ {product.oldPrice}</span>
            )}
          </div>
          <button className="buy-btn" onClick={handleAddToCart}>
            <img
              src="assets/images/shopping-cart.png"
              alt="Carrito"
              style={{ width: '1.25rem', height: '1.25rem' }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
