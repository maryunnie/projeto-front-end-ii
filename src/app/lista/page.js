import  styles  from './lista.module.css'

export default function lista() {
    const nomes = ['mariany', 'luiz', 'maria', 'beatriz', 'leticia']
    const carros = [
        {
            id: 1,
            modelo: 'fusca',
            ano: 1975,
            cor: 'preto'
        },

        {
            id: 2,
            modelo: 'corola',
            ano: 1875,
            cor: 'rosa'
        },

        {
            id: 3,
            modelo: 'fiat',
            ano: 2015,
            cor: 'roxo'
        },

        {
            id: 4,
            modelo: 'jeep',
            ano: 1876,
            cor: 'azul'
        },

        {
            id: 5,
            modelo: 'hyundai',
            ano: 2005,
            cor: 'vermelho'

        },
    ]
    return (
        <main>
            <div className={styles.div}>
                <h1>lista</h1>
                <ul style={{ marginLeft: '50px' }}>
                    {nomes.map((nome, id) => (
                        <li  className={styles.li} key={id}>{id + 1} - {nome}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.div}>
                <h2 className={styles.h2}>Lista de objetos</h2>
                {
                    carros.map((carro) => (
                        <div>
                            <h3 className={styles.h3}>{carro.id} - {carro.modelo}</h3>
                            <p className={styles.p}>{carro.cor}</p>
                            <p  className={styles.p}>{carro.ano}</p>
                        </div>
                    ))
                }
            </div>
        </main>

    )
}