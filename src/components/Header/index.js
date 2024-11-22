'use client';

import Link from "next/link"
import React, { useState } from 'react';
import styles from "./Header.module.css";
import Image from "next/image"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {

    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>

      <div className={styles.logo}>
<<<<<<< HEAD
        <Image className={styles.img} src="/images/itunes.png" alt="Logo"  width={50} height={80}/>
=======
        <Image className={styles.img} src="/images/playlist.png" alt="Logo" width={50} height={150} />
>>>>>>> 5a1039a3ffe4d296f9527b0a54ddb481be374ec8
        <h1 className={styles.h1}>playlist</h1>
      </div>

      {isMenuOpen &&
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.lista}>
            <li>
              <Link className={styles.link} href='/'>Home</Link>
            </li>

            <li>
              <Link className={styles.link} href="/sobre">Sobre</Link>
            </li>

            <li>
              <Link className={styles.link} href="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      }
      <button className={styles.menuButton} onClick={toggleMenu}>
        {isMenuOpen ? 'Fechar' : 'Menu'}
      </button>
    </header>
  );
};

export default Header;


/*export default function Header(){
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
}*/

/*gfvrfvgyhjg5ffvb*/