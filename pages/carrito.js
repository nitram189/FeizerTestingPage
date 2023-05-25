import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/carrito.module.css";

export default function Carrito({ carrito, actualizarCantidad, eliminarProducto }) {

  const [ total, setTotal ] = useState(0)

  useEffect(() => {
    const aPagar = carrito.reduce((total, torneta) => total + (torneta.price * torneta.cantidad), 0)
    setTotal( aPagar )
  }, [ carrito ])
  

  return (
    <Layout title="Carrito de compras">
      <main className="contenedor">
        <h1 className="heading">carrito de compras.</h1>

        <div className={ styles.contenido }>

          <div className={ styles.carrito }>
            <h2>Articulos </h2>

            <div className={ styles.display }>
            { carrito.length === 0
              ? 'El carrito de compras esta vacio'
              :  (carrito.map( producto => (
                  <div
                    key={ producto.id }
                    className={ styles.producto }>
                      <div>
                        <Image
                        src={ producto.image}
                        alt={`Image de ${ producto.title }`}
                        width={ 250 }
                        height={150}/>
                      </div>
                      <div>
                        <p className={ styles.nombre }>{ producto.title }</p>
                        
                        <div>
                          <p>Cantidad:</p>
                          <select
                            value={ producto.cantidad }
                            onChange={ e => actualizarCantidad({
                              id: producto.id,
                              cantidad: e.target.value
                            })}
                            className={ styles.select }>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                          </select>
                        </div>

                        <p className={ styles.precio }>$<span>{ producto.price }</span></p>
                        <p className={ styles.subtotal }>Subtotal: $<span>{ producto.price * producto.cantidad }</span></p>
                      </div>
                      <button
                        className={ styles.eliminar }
                        type="button"
                        onClick={ () => eliminarProducto( producto.id )}>
                          X</button>
                </div>
              )))
              }  
            </div>
            
          </div>

          <aside className={ styles.resumen }>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar: ${ total }</p>
          </aside>
        </div>
      </main>
      
    </Layout>
  )
}
