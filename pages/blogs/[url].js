import Layout from "@/components/layout";
import { formatearFecha } from "@/utils/helpers";
import Image from "next/image";
import styles from "../../styles/blog.module.css";

export async function getServerSideProps({query: { url }}) {
    const resp = await fetch(`${ process.env.API_URL }/blogs?filters[url]=${ url }&populate=image`)
    const { data: blog } = await resp.json()

  return {
    props: { 
      blog
    }
  }
}


export default function BLogUrl({ blog }) {
  
    const { title, description, image, publishedAt } = blog[0].attributes

    return (
        <Layout title={ title }>
          <article className={ `${ styles.post } ${ styles['mt-3'] }` }>
            <Image
              src={ image.data[0].attributes.url }
              alt={ `imagen blog ${ title }` }
              width={1000}
              height={400}/>

            <div className={ styles.contenido }>
              <h3>{ title }</h3>
              <p className={ styles.fecha }>{ formatearFecha(publishedAt) }</p>
              <p className={ styles.texto }>{ description }</p>
            </div>
            </article>
        </Layout>
  )
}
