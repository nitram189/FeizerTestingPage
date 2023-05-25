import Image from "next/image"
import Link from "next/link"
import styles from "../styles/blog.module.css"
import { formatearFecha } from "@/utils/helpers"

export default function Blog({ blog }) {

    const { title, description, image, url, publishedAt } = blog

  return (
    <article>
      <Image
        src={ image.data[0].attributes.formats.small.url }
        alt={ `imagen blog ${ title }` }
        width={600}
        height={400}/>

        <div className={ styles.contenido }>
          <h3>{ title }</h3>
          <p className={ styles.fecha }>{ formatearFecha(publishedAt) }</p>
          <p className={ styles.resumen }>{ description }</p>
          <Link
            href={`/blogs/${ url }`}
            className={ styles.enlace }>
              Leer blog</Link>
        </div>
    </article>
  )
}
