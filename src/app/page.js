import styles from "./page.module.css";
import Image  from "next/image";
// import album from "../../public/images/"

export default function Home() {
  return (
    <div>
      <h1 className={styles.h1}>Músicas Favoritas</h1>
      <Image className={styles.img} src='/images/frankOcean.jpg' 
      alt="Imagem do Música" width={300} height={450}/>      
    </div>
  );
}
