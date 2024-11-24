import styles from "./page.module.css";
import Image  from "next/image";
// import album from "../../public/images/"

export default function Home() {
  return (
    <div>
      <h1>Álbuns Favorito</h1>   
      <Image className={styles.img} src='/images/joji.png' 
      alt="Imagem do Música" width={300} height={450}/>
      <Image className={styles.imga} src='/images/album.jpg' 
      alt="Imagem do Música" width={300} height={450}/>      
    </div>
  );
}
