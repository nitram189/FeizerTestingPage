import Image from "next/image"
import Link from "next/link"
import styles from "../styles/tornetas.module.css"

export default function Torneta({ torneta }) {

  const { title, description, image, price, url } = torneta;

  return (
    <div className={ styles.torneta }>
      <Image src={ image.data.attributes.formats.medium.url }
      alt={`${ title } imagen`}
      width={600}
      height={400}/>

      <div className={ styles.contenido }>
        <h3>{ title }</h3>
        <p className={ styles.descripcion }>{ description }</p>
        <p className={ styles.precio }>${ price }</p>
        <Link href={ `/tornetas/${ url }` }
          className={ styles.enlace }>
          Ver torneta
        </Link>
      </div>
    </div>

  )
}
