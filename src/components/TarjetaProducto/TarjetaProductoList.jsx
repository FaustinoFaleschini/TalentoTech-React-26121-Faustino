import TarjetaProducto from "./TarjetaProducto";
import styles from './TarjetaProducto.module.css';

export function TarjetaProductoList({ productos }) {

    return (
            <div className={styles.grid}>
                {productos.map(prod => (
                    <TarjetaProducto key={prod.id} {...prod} />
                ))}
            </div>
    );
}