function geraTab() {
    const lista = []
    for (let i = 1; i <= 8; i++) {
        let classeAplicada = i % 2 == 0 ? "preto" : "branco"
        lista.push(<span className={classeAplicada} numero={i}></span>)
    }
    return lista
}

export default function Tabuleiro1() {
    return (
        <div className="caseChadrez">
            {geraTab()}
        </div>
    )
}