import { TarjetaProductoList } from "./TarjetaProductoList";
import { useEffect, useState } from 'React';

export function TarjetaProductoContainer() {    
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('productos.json')
      .then((respuesta) => respuesta.json())
      .then((datos) => setProductos(datos))
      .catch((error) => console.error('Error:', error));
    }, []);
    /*
    const productos = [ { id: 1, nombre: "NOX At10 Attack 12K", imagen: "paleta1.webp", precio: 250000, stock:10 },
                    { id: 2, nombre: "Wilson Bela LS V3", imagen: "paleta2.webp", precio: 275000, stock:10 },
                    { id: 3, nombre: "Adidas MetalBone Carbon", imagen: "paleta3.webp", precio: 300000, stock:20 },
                    { id: 4, nombre: "BullPadel Vertex 04", imagen: "paleta4.webp", precio: 230000, stock:15 },
                    { id: 5, nombre: "NOX X-Hero White", imagen: "paleta5.webp", precio: 200000, stock:10 },
                    { id: 6, nombre: "Wilson Defy", imagen: "paleta6.webp", precio: 380000, stock:10 },
                    { id: 7, nombre: "Adidas MetalBone SuperLigth", imagen: "paleta7.webp", precio: 180000, stock:20 },
                    { id: 8, nombre: "BullPadel Fibra Vidrio", imagen: "paleta8.webp", precio: 330000, stock:5 }
                    ];
    */

    return (
    
        <TarjetaProductoList productos={productos}/>
    
    /*
    <div className={styles.grid}>
        {
            productos.map((producto) => (
                <TarjetaProducto key={producto.id} {...producto}   />     
            )) 
        }
    </div>
    */
);

}

export default TarjetaProductoContainer;