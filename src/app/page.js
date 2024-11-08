import styles from "./page.module.css";
import Image  from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Meu Titulo</h1>
      <Image className={styles.img} src='/images/sun-flower-1681385_640.jpg' 
      alt="Imagem do Girassol" width={400} height={400}/>      
    </div>
  );
}
