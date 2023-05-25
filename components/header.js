import Image from "next/image"
import Link from "next/link";
import styles from '../styles/header.module.css'
import { useRouter } from "next/router";


export default function Header() {
  
    const { pathname } = useRouter();

    return (
      
      <header className={ styles.header }>

        <div className={ `contenedor ${ styles.barra }` }>
          <Link href='/'>
            <Image src='/logo-feizer.jpg' alt='logo feizer' width={300} height={200} />
          </Link>
          
          <nav className={ styles.navegacion }>
            <Link href='/'
              className={ pathname === '/' ? styles.active : '' }>
              Inicio
            </Link>
            <Link href='/nosotros'
              className={ pathname === '/nosotros' ? styles.active : '' }>
              Nosotros
            </Link>
            <Link href='/tornetas'
              className={ pathname === '/tornetas' ? styles.active : '' }>
              Tornetas
            </Link>
            <Link href='/tornos'
              className={ pathname === '/tornos' ? styles.active : '' }>
              Tornos
            </Link>
            <Link href='/blogs'
            className={ pathname === '/blogs' ? styles.active : '' }>
              Blog
            </Link>
            <Link href='/carrito'>
              <Image src="/carrito.png" alt="imagen carrito" width={20} height={10}/>
            </Link>

          </nav>

        </div>
      </header>
    
  )
}
