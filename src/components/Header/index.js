import Link from "next/link"
import styles from "./Header.module.css"
export default function Header(){
    return(
        <header>
            <nav>
                <ul className={styles.lista}>
                    <li>
                        <Link id="link" href='/'>Home</Link>
                    </li>
                    <li>
                        <Link id="link" href="/sobre">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}