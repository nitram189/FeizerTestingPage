
import Image from "next/image";
import styles from "../../styles/tornetas.module.css";
import Layout from "@/components/layout";
import { useState } from "react";

// export async function getServerSideProps({ query: { url } }) {
//   const resp = await fetch(`${ process.env.API_URL }/tornetas?filters[url]=${ url }&populate=image`)
//   const { data: torneta } = await resp.json()

//   return {
//     props: { 
//       torneta
//     }
//   }
// }

export async function getStaticPaths() {
  const resp = await fetch(`${process.env.API_URL }/tornetas`)
  const { data } = await resp.json()

  const paths = data.map( torneta => ({
    params: {
      url: torneta.attributes.url
    }
  }))
  
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { url } }) {
  const resp = await fetch(`${ process.env.API_URL }/tornetas?filters[url]=${ url }&populate=image`)
  const { data: torneta } = await resp.json()

  return {
    props: { 
      torneta
    }
  }
}

export default function Producto({ torneta, agregarAlCarrito }) {

  const [ cantidad, setCantidad ] = useState(0);
  const { title, description, price, image } = torneta[0].attributes
  
  const handleSubmit = e => {
    e.preventDefault();
    if ( cantidad < 1 ) {
      alert('Introduzca una cantidad valida')
      return
    }
    const tornetaSeleccionada = {
      id: torneta[0].id,
      image: image.data.attributes.formats.small.url,
      cantidad,
      title,
      price
    }
    agregarAlCarrito( tornetaSeleccionada )
    
  }

  return (
    <Layout title={ title }>
      <div className={ styles.torneta }>
        <Image src={ image.data.attributes.formats.medium.url }
        alt={`${ title } imagen`}
        width={600}
        height={400}/>

        <div className={ styles.contenido }>
          <h3>{ title }</h3>
          <p className={ styles.descripcion }>{ description }</p>
          <p className={ styles.precio }>${ price }</p>

          <form
            onSubmit={ handleSubmit }
            className={ styles.formulario }>

            <label htmlFor="cantidad">Cantidad:</label>
            <select
              onChange={ e => setCantidad( +e.target.value ) }
              id="cantidad">
              <option value="0">-- Seleccione --</option>
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

            {/* <label htmlFor="color">Color:</label>
            <select id="color">
              <option value="0">-- Seleccione --</option>
              <option value="rosa">Rosa</option>
              <option value="gris">Gris</option>
              <option value="verde">Verde</option>
              <option value="azul">Azul</option>
              <option value="blanco">Blanco</option>
              <option value="coral">Coral</option>
              <option value="fucsia">Fucsia</option>
            </select> */}

            <input
              type="submit"
              value="Agregar al carrito"/>

          </form>
        </div>
      </div>
      </Layout>
  )
}
