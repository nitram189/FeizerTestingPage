import Layout from "@/components/layout"
import Torno from "@/components/torno"
import styles from "../styles/grid.module.css"

export async function getStaticProps() {
  const resp = await fetch(`${ process.env.API_URL }/tornos?populate=image`)
  const { data: tornos } = await resp.json()

  return {
    props: { tornos }
  }
}

export default function Tornos({ tornos }) {

  return (
      <Layout
        title={ 'Tornos' }
        description='Tornos alfareros electricos, produccion nacional,'>

        <main className="contenedor">
          <h1 className="heading">nuestros tornos.</h1>

          <div className={ styles.grid }>
            { tornos.length > 0 && 
                tornos.map( torno => (
                  <Torno
                    key={ torno.id }
                    torno={ torno.attributes }/>
            ))}
          </div>
        </main>
      </Layout>
  )
}
