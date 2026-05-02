import TarjetaContacto from "./TarjetaContacto";
import styles from "./TarjetaContacto.module.css";

export function TarjetaContactoContainer() {    
    const contactos = [ { id: 1, nombre: "Faustino Faleschini", imagen: "", telefono: "(11) 5558-6030" },
                        { id: 2, nombre: "Romina Calisaya", imagen: "", telefono: "(11) 5120-1238" },
                        { id: 3, nombre: "Edison Cavani", imagen: "", telefono: "(11) 5454-6565" },
                      ];
  
    return (
    <div className={styles.grid}>
        {
            contactos.map((contacto) => (
                <TarjetaContacto key={contacto.id} {...contacto}   />     
            )) 
        }
    </div>
);

}

export default TarjetaContactoContainer;