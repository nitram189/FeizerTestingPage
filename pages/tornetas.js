import Layout from "@/components/layout";
import Torneta from "@/components/torneta";
import styles from "../styles/grid.module.css";

// export async function getStaticProps() {
//   const resp = await fetch(`${ process.env.API_URL}/tornetas?populate=image`)
//   const { data: tornetas } = await resp.json()

//   return {
//     props: {
//       tornetas
//     }}
// }
export async function getServerSideProps() {
  const resp = await fetch(`${ process.env.API_URL}/tornetas?populate=image`)
  const { data: tornetas } = await resp.json()

  return {
    props: {
      tornetas
    }}
}


export default function Tornetas({ tornetas }) {

  return (
    <>
    <Layout
      title={ 'Tornetas' }
      description='Tornetas para alfareria en diferentes diametros construidas 100 % en fundicion de aluminio'>

      <main className="contenedor">
        <h1 className="heading">nuestras tornetas.</h1>
        
        <div className={ styles.grid }>
         { tornetas.length > 0 && tornetas.map( torneta => (
          <Torneta
            key={ torneta.id }
            torneta={ torneta.attributes } />
        ))}
        </div>
        

      </main>
    </Layout>
 
</>
  )
}
