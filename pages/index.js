import Layout from "@/components/layout";
import styles from "../styles/grid.module.css";
import Torneta from "@/components/torneta";
import Torno from "@/components/torno";
import Blog from "@/components/blog";
import Curso from "@/components/curso";

export async function getStaticProps() {
  
  const urlTornetas = `${ process.env.API_URL }/tornetas?populate=image`
  const urlTornos = `${ process.env.API_URL }/tornos?populate=image`
  const urlBlogs = `${ process.env.API_URL }/blogs?populate=image`
  const urlCurso = `${ process.env.API_URL }/curso?populate=image`
  
  const [ resTornetas, resTornos, resBlogs, resCurso ] = await Promise.all([
    fetch(urlTornetas),
    fetch(urlTornos),
    fetch(urlBlogs),
    fetch(urlCurso)
  ])

  const [ { data: tornetas }, { data: tornos }, { data: blogs }, { data: curso } ] = await Promise.all([
    resTornetas.json(),
    resTornos.json(),
    resBlogs.json(),
    resCurso.json()
  ])

  return {
    props: {
      tornetas,
      tornos,
      blogs,
      curso
    }
  }
}


export default function Inicio({ tornetas, tornos, blogs, curso }) {

    return (
    <>
      <Layout
        title={ 'Inicio' }
        description='Productos para ceramica, venta de tornetas, tornos, cursos de alfareria y laminadoras'>
        
        <main className="contenedor">
          <h1 className="heading">nuestros productos.</h1>
          <div className={ styles.grid }>
            { tornetas.length > 0 && 
              tornetas.map( torneta => (
                <Torneta
                  key={torneta.id }
                  torneta={ torneta.attributes }/>
              ) ) }
          </div>
          <div className={ styles.grid }>
            { tornos.length > 0 && 
              tornos.map( torno => (
                <Torno
                  key={torno.id }
                  torno={ torno.attributes }/>
              ) ) }
          </div>
        </main>
        
       <Curso 
          curso={ curso.attributes }/>

        <section className="contenedor">

          <h2 className="heading">blog.</h2>
          <div className={ styles.grid }>
            { blogs.length > 0 && 
              blogs.map( blog => (
                <Blog
                  key={ blog.id }
                  blog={ blog.attributes }/>
              ) ) }
          </div>
        </section>

      </Layout>
     
    </>
  )
}
