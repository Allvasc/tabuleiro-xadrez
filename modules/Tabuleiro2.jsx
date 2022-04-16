function geraTab() {
    const lista = []
    for (let i = 1; i <= 8; i++) {
        let classeAplicada = i % 2 == 0 ? "branco" : "preto"
        lista.push(<span className={classeAplicada} numero={i}></span>)
    }
    return lista
}

export default function Tabuleiro2() {
    return (
        <div className="caseChadrez">
            {geraTab()}
        </div>
    )
}