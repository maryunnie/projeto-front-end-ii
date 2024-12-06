import styles from './Card.module.css'


export default function Card({ id, modelo, ano, cor }) {
    return (
        <div className={styles.div}>
            <h2 className={styles.h2}>{id} - {modelo}</h2>
            <p className={styles.p}>{ano}</p>
            <p className={styles.p}>{cor}</p>       
        </div>
    )
}