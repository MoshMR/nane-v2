# Sistema de Filtrado de Productos - Documentación

## Resumen
Sistema de filtrado completamente funcional para la sección de productos del sitio web Jandiara Joyas.

## Catálogo de Productos (12 Total)

### Pulseras (5)
1. Pulsera Ojo Turco Clásica - S/ 45 (antes S/ 60) -25%
2. Pulsera Cuarzo Rosa - S/ 55 (antes S/ 70) -21%
3. Pulsera Ojo Morado - S/ 48
4. Pulsera Amatista - S/ 68 (antes S/ 80) -15%
5. Pulsera Ámbar - S/ 72

### Collares (3)
1. Collar Árbol de la Vida - S/ 65
2. Collar Luna y Estrellas - S/ 58
3. Collar Corazón de Plata - S/ 52 (antes S/ 65) -20%

### Aretes (2)
1. Aretes Mandala - S/ 38
2. Aretes de Perla - S/ 42

### Anillos (2)
1. Anillo Solitario - S/ 85
2. Anillo Infinito - S/ 65 (antes S/ 79) -18%

## Nuevas Imágenes Generadas

En `assets/images/`:
- pulsera-ojo-morado.png
- pulsera-amatista.png
- pulsera-ambar.png
- collar-luna.png
- collar-corazon.png
- aretes-perla.png
- anillo-solitario.png
- anillo-infinito.png

## Implementación

### 1. HTML - Botones de Filtro
```html
<div class="filters">
  <button class="filter-btn active" data-filter="todos">Todos (12)</button>
  <button class="filter-btn" data-filter="pulsera">Pulseras (5)</button>
  <button class="filter-btn" data-filter="collar">Collares (3)</button>
  <button class="filter-btn" data-filter="arete">Aretes (2)</button>
  <button class="filter-btn" data-filter="anillo">Anillos (2)</button>
</div>
```

### 2. HTML - Productos con Data Attributes
```html
<div class="product-card" data-category="pulsera">
  <!-- Contenido del producto -->
</div>
```

### 3. JavaScript - Sistema de Filtrado
```javascript
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    const filterCategory = button.getAttribute('data-filter');
    
    productCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      
      if (filterCategory === 'todos' || cardCategory === filterCategory) {
        card.style.display = 'block';
        card.style.animation = 'fadeInUp 0.5s ease-out';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
```

### 4. CSS - Animación
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Cómo Usar

1. Abre `index.html` en el navegador
2. Haz clic en cualquier botón de filtro
3. Los productos se filtrarán automáticamente
4. Animación suave al cambiar de categoría

## Archivos Modificados

- `index.html` - Productos y JavaScript
- `styles.css` - Animaciones
- `assets/images/` - 8 nuevas imágenes

---

**Creado:** 20 de noviembre, 2025  
**Autor:** Antigravity AI Assistant
