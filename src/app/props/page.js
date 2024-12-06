import Card from "@/components/Card"

export default function Props() {
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
        <div>
            <h1>Props</h1>
            {
                carros.map((carro) => (
            <Card
                key={carro.id}
                id={carro.id}
                modelo={carro.modelo}
                ano={carro.ano}
                cor={carro.cor} />
            ))}
        </div>
    
    )
}