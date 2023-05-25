import Layout from "@/components/layout";
import styles from "../../styles/tornetas.module.css"
import Image from "next/image";

export async function getStaticPaths() {
    const resp = await fetch(`${process.env.API_URL }/tornos`)
    const { data } = await resp.json()
  
    const paths = data.map( torno => ({
      params: {
        url: torno.attributes.url
      }
    }))

    return {
      paths,
      fallback: false
    }
  }
  
  export async function getStaticProps({ params: { url } }) {
    const resp = await fetch(`${ process.env.API_URL }/tornos?filters[url]=${ url }&populate=image`)
    const { data: torno } = await resp.json()
  
    return {
      props: { 
        torno
      }
    }
  }
  
export default function TornoUrl({ torno }) {

    const { title, description, image, price } = torno[0].attributes

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

          <form className={ styles.formulario }>
            <label htmlFor="cantidad">Cantidad:</label>
            <select id="cantidad">
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
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
