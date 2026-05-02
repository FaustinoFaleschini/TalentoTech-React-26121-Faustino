import NavBar from "./NavBar";
// Componente contenedor: se encarga de la lógica.
export function NavBarContainer() {
    const links = [ { id: 1, descripcion: "Inicio", link: "/" },
                    { id: 2, descripcion: "Productos", link: "/productos" },
                    { id: 3, descripcion: "Carrito", link: "/carrito" },
                    { id: 4, descripcion: "Contacto", link: "/contacto" }
                    ];

return (

    links.map((enlace) => (
        <NavBar key={enlace.id} {...enlace}   />     
    ))
);

}

export default NavBarContainer;