import Blog from "@/components/blog"
import Layout from "@/components/layout"
import styles from "../styles/grid.module.css"

export async function getStaticProps() {
  const resp = await fetch(`${ process.env.API_URL }/blogs?populate=image`)
  const { data: blogs } = await resp.json()

  return {
    props: { 
      blogs
    }
  }
}

export default function Blogs({ blogs }) {

  return (
    <>
      <Layout
        title={ 'Blogs' }
        description='Cursos y blogs de alfareria para cualquier persona que quiera aprender alfareria, desde principiantes hasta nivel experto'>

        <main className="contenedor">
          <h1 className="heading">blog.</h1>
          <div className={ styles.grid }>
            { blogs?.map( blog => (
              <Blog 
                key={ blog.id}
                blog={ blog.attributes }/>
            ) ) }
          </div>
        </main>
      </Layout>
   
  </>
  )
}
