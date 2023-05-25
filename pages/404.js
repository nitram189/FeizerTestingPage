import Layout from "@/components/layout"
import Link from "next/link"

export default function Pagina404() {
  return (
    <Layout title="Pagina no encontrada">
      <p className="error">Pagina no encontrada</p>
      <Link href='/'
        className='error-enlace'>
          Ir a inicio</Link>
    </Layout>
  )
}
