import React from 'react'
import styles from './TarjetaProducto.module.css';
import {useState} from 'react'


function TarjetaProducto({nombre, imagen, precio, stock}) {
  const [cantidad, setCantidad] = useState(0);
  const[stockProd,setStockProd]= useState(stock);
  const[esFavorito, setEsFavorito] = useState(false);

  const incrementar = () => {
      if (stockProd > 0) {
        setCantidad(cantidad + 1);
        setStockProd(stockProd - 1);
      }
  };

  const decrementar = () => {
      if (cantidad > 0) {
        setCantidad(cantidad - 1);
        setStockProd(stockProd + 1);
      }
  };

  const marcarComoFavorito = () => {
    setEsFavorito(!esFavorito);
  }

   return (
    <div className={styles.card}>
    <div className={styles.imagenWrapper}>
      <img src={imagen} alt={nombre} className={styles.imagen} />
    </div>
    <div className={styles.cuerpo}>
      <p className={styles.nombre}>{nombre}</p>
      <p className={styles.precio}>${precio}</p>
      <p className={styles.stock}>Stock disponible: {stockProd}</p>
      <div className={styles.controles}>
        <button className={styles.btnCantidad} onClick={decrementar}>−</button>
        <span className={styles.cantidad}>{cantidad}</span>
        <button className={styles.btnCantidad} onClick={incrementar}>+</button>
      </div>
      <button className={styles.btnAgregar}>Agregar al carrito</button>
    </div>
  </div>
  );
}

export default TarjetaProducto