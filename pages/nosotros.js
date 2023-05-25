import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/nosotros.module.css";


export default function Nosotros() {
  
    return (
        <Layout
          title={ 'Nosotros' }
          description='Pyme dedicada a la fabricacion de herramientas para la alfareria'>
            
          <main className="contenedor">
            <h1 className="heading">nosotros.</h1>
            
            <div className={ styles.contenido }>
              <Image src='/torneta-feizer-1.jpg' alt="nosotros foto" width={400} height={600}/>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel pellentesque velit. Ut molestie, ligula id porta mollis, leo dolor interdum massa, nec efficitur sapien ex et lacus. Cras volutpat, diam sit amet scelerisque convallis, nisl massa tristique sapien, non molestie massa lectus non tellus. Nunc ac porta leo. Aenean consequat ultricies metus non dictum. Donec nisl risus, semper nec mauris ac, lobortis posuere augue. Morbi eu nunc quis libero congue venenatis. Nulla lobortis diam eros, at tincidunt nisl molestie nec. Vestibulum sodales et justo vel mattis. Praesent suscipit euismod sapien sed sodales. Sed auctor nibh vitae neque sagittis, a blandit orci iaculis. Duis eu justo blandit sem bibendum pulvinar ac at arcu. Vestibulum aliquam fringilla nibh nec lacinia
                  </p>
                <p>
                  Nam in volutpat neque, vitae laoreet leo. Duis bibendum lacus id finibus gravida. Nullam accumsan efficitur lacinia. Duis non dolor sed magna pulvinar viverra. Vestibulum vestibulum enim ac dui tincidunt porta. Vivamus hendrerit, erat quis elementum convallis, neque diam lobortis ligula, non convallis felis sapien sit amet tortor. Mauris mollis, nunc quis interdum viverra, risus ex fermentum lacus, ac ultrices dui diam a erat. Maecenas semper felis at pellentesque vestibulum. Ut non magna ultricies, posuere est sed, pellentesque dui. Mauris nisi dui, aliquam ut ipsum id, ultricies dignissim quam. </p>
              </div>

            </div>
          </main>

        </Layout>
    
  )
}
