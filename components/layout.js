import Head from "next/head"
import Header from "./header"
import Footer from "./footer"

export default function Layout({ children, title = '', description = '' }) {
  return (
    <>
      <Head>
        <title>{`FEIZER - ${ title }`}</title>
        <meta name="desdcription" content={ description }/>
      </Head>
      
      <Header />
      { children }
      <Footer />
    </>
  )
}
