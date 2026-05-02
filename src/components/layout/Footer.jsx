import React from 'react'
import style from './Footer.module.css'
import TarjetaContactoContainer from './TarjetaContacto/TarjetaContactoContainer';

function Footer() {
  return (
      <footer className={style.footer}>
        <p>&copy; 2026 - Tienda Padel PRO</p>
        <TarjetaContactoContainer />
    </footer>
  );
}

export default Footer