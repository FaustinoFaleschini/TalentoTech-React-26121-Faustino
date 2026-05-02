import React from 'react'
import style from './NavBar.module.css'

function NavBar({descripcion, link}) {
  return (
      
        <a href={link} className={style.enlace}>{descripcion}</a>
      
  );
}

export default NavBar