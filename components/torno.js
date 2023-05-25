import Link from "next/link";
import styles from "../styles/tornetas.module.css"
import Image from "next/image";


export default function Torno({ torno }) {

    const { title, description, image, price, url } = torno;

  return (
    <div className={ styles.torneta }>
        <Image 
            src={ image.data.attributes.formats.medium.url }
            alt={`${ title } imagen`}
            width={600}
            height={400}/>

      <div className={ styles.contenido }>
        <h3>{ title }</h3>
        <p className={ styles.descripcion }>{ description }</p>
        <p className={ styles.precio }>${ price }</p>
        <Link href={ `/tornos/${ url }` }
          className={ styles.enlace }>
          Ver torno
        </Link>
      </div>
    </div>
  )
}
