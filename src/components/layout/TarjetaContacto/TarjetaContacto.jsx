import React from 'react'
import styles from './TarjetaContacto.module.css';


function TarjetaContacto({nombre, telefono}) {
  
  return (
    <div className={styles.card}>
    <div className={styles.cuerpo}>
        <p className={styles.nombre}>{nombre}</p>
        <p className={styles.telefono}>{telefono}</p>
        
    </div>
  </div>
  );
}

export default TarjetaContacto