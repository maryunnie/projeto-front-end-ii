import Link from "next/link"
import styles from "./Header.module.css"
import Image from "next/image"
export default function Header(){
    return(
        <header>
            <nav className={styles.nav}>
                <ul className={styles.lista}>
                    <li>
                        <Link className={styles.link} href='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={styles.link} href="/sobre">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}