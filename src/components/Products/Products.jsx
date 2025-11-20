import React, { useState } from 'react';
import './Products.css';
import ProductCard from './ProductCard';
import { products, categories } from '../../data/productsData';

function Products({ addToCart }) {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filteredProducts = activeFilter === 'todos'
    ? products
    : products.filter(product => product.category === activeFilter);

  return (
    <section id="productos" className="products">
      <div className="container">
        <div className="section-header">
          <div className="badge" style={{ margin: '0 auto 1.5rem' }}>
            <span>🔍</span>
            <span>EXPLORA NUESTRA COLECCIÓN</span>
          </div>
          <h2>Productos Únicos</h2>
          <p style={{
            maxWidth: '48rem',
            margin: '1.5rem auto 0',
            color: '#6b7280',
            fontSize: '1.25rem',
          }}>
            Cada pieza es única y está hecha con amor para acompañarte en tu día
            a día ✨
          </p>
        </div>

        <div className="filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button className="btn-secondary">Ver todos los productos →</button>
        </div>
      </div>
    </section>
  );
}

export default Products;
