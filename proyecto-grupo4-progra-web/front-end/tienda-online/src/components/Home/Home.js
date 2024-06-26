import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = ({ addToCart }) => (
  <div className={styles.Home} data-testid="Home">
    <header className="header">
      <div className="header-logo">
        <h1>TrendNet</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a href="#">Carrito</a>
          </li>
        </ul>
      </nav>
    </header>
    <main className="main-content">
      <section className="product-list">
        <h2>Lámparas</h2>
        <div className="product-items-container">
          {products.map((product) => (
            <div className="product-item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Precio: {product.price}</p>
              <button>
                <Link to={`/product/${product.id}`}>Ver detalles</Link>
              </button>
              <button onClick={() => addToCart(product)}>Agregar al carrito</button>
            </div>
          ))}
        </div>
      </section>
    </main>
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 TrendNet. Todos los derechos reservados.</p>
        <ul>
          <li>
            <a href="#">Política de privacidad</a>
          </li>
          <li>
            <a href="#">Términos y condiciones</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
);

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

const products = [
  {
    id: 1,
    name: 'Lámpara de Mesa',
    price: 29617.5,
    image: 'lamp1.jpg',
    description: 'Lámpara de mesa de diseño moderno',
  },
  {
    id: 2,
    name: 'Lámpara Piso Decorativa',
    price: 46087.5,
    image: 'lamp2.jpg',
    description: 'Lámpara de piso decorativa de diseño moderno',
  },
  {
    id: 3,
    name: 'Lámpara de Techo Vintage',
    price: 38000.0,
    image: 'lamp3.jpg',
    description: 'Lámpara de techo vintage estilo industrial',
  },
  {
    id: 4,
    name: 'Lámpara de Pie Minimalista',
    price: 55000.0,
    image: 'lamp4.jpg',
    description: 'Lámpara de pie minimalista con pantalla ajustable',
  },
  {
    id: 5,
    name: 'Lámpara de Escritorio LED',
    price: 32000.0,
    image: 'lamp5.jpg',
    description: 'Lámpara de escritorio LED con brazo flexible',
  },
  {
    id: 6,
    name: 'Lámpara Colgante Nórdica',
    price: 42000.0,
    image: 'lamp6.jpg',
    description: 'Lámpara colgante estilo nórdico con pantalla de tela',
  },
  {
    id: 7,
    name: 'Lámpara de Pared Industrial',
    price: 49000.0,
    image: 'lamp7.jpg',
    description: 'Lámpara de pared estilo industrial con brazo articulado',
  },
  {
    id: 8,
    name: 'Lámpara de Mesa Retro',
    price: 36000.0,
    image: 'lamp8.jpg',
    description: 'Lámpara de mesa retro con base de madera',
  },
  {
    id: 9,
    name: 'Lámpara Colgante Geométrica',
    price: 58000.0,
    image: 'lamp9.jpg',
    description: 'Lámpara colgante geométrica de diseño contemporáneo',
  },
  {
    id: 10,
    name: 'Lámpara de Pie Trípode',
    price: 65000.0,
    image: 'lamp10.jpg',
    description: 'Lámpara de pie trípode con pantalla de lino',
  },
];

export { Home, products };


