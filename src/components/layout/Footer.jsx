import React from 'react'
import style from './Footer.module.css'
import Empresa from './Empresa/Empresa';
import TarjetaContactoContainer from './TarjetaContacto/TarjetaContactoContainer';

function Footer() {
  return (
      <footer className={style.footer}>
        <Empresa />        
        <TarjetaContactoContainer />
        <p>&copy; 2026 - Tienda Padel PRO</p>
    </footer>
  );
}

export default Footer