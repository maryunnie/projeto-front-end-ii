import styles from "./page.module.css";
import Image  from "next/image";
// import album from "../../public/images/"

export default function Home() {
  return (
    <div>
      <h1>Álbum Favorita</h1>
      <Image className={styles.img} src='/images/album.jpg' 
      alt="Imagem do Música" width={300} height={450}/>    
      <p className={styles.p}>Blonde é o segundo álbum de estúdio do cantor e compositor norte-americano Frank Ocean.</p>
      <p className={styles.p}>Foi lançado a 20 de Agosto de 2016 em exclusivo, inicialmente, na loja digital da iTunes e no serviço de streaming</p>  
      <p className={styles.p}>Apple Music como um acompanhamento ao álbum visual Endless, lançado no dia anterior sob as mesmas circunstâncias.</p>  
      
    </div>
  );
}
