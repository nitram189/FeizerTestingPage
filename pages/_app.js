import '@/styles/globals.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {

  const carritoLS = typeof window !== 'undefined' && JSON.parse( localStorage.getItem('carrito')) || []
  const [ carrito, setCarrito ] = useState( carritoLS )
  const [ paginaLista, setPaginaLista ] = useState(false)

  useEffect(() => {
    setPaginaLista(true)
  }, [])

  useEffect(() => {
    if( typeof window !== 'undefined' ) {
        localStorage.setItem( 'carrito', JSON.stringify( carrito ))
    }
  }, [ carrito ])
  

  const agregarAlCarrito = torneta => {
    if( carrito.some( tornetaState => tornetaState.id === torneta.id )) {
      const carritoActualizado = carrito.map( tornetaState => {
        if( tornetaState.id === torneta.id ) {
          tornetaState.cantidad = torneta.cantidad
        }
        return tornetaState
        })
        setCarrito( carritoActualizado )
    }
    else {
      setCarrito([...carrito, torneta])
    }
  }

  const actualizarCantidad = ( torneta ) => {
    const carritoActualizado = carrito.map( tornetaState => {
        if( tornetaState.id === torneta.id) {
            tornetaState.cantidad = torneta.cantidad
        }
        return tornetaState
    })
    setCarrito( carritoActualizado )
  }
  
  const eliminarProducto = ( id ) => {
    const carritoActualizado = carrito.filter( tornetaState => tornetaState.id !== id )
    setCarrito( carritoActualizado )
  }

  return paginaLista ? <Component
          {...pageProps}
          carrito={ carrito }
          agregarAlCarrito={ agregarAlCarrito }
          actualizarCantidad={ actualizarCantidad }
          eliminarProducto={ eliminarProducto }
    /> : null
}
