import Tabuleiro1 from "../modules/Tabuleiro1"
import Tabuleiro2 from "../modules/Tabuleiro2"
import styled from "../styles/body.tabuleiro.module.css"


export default function bodyTab() {
    return(
        <div className={styled.bgbody}>
            <Tabuleiro1/>
            <Tabuleiro2/>
            <Tabuleiro1/>
            <Tabuleiro2/>
            <Tabuleiro1/>
            <Tabuleiro2/>
            <Tabuleiro1/>
            <Tabuleiro2/>
        </div>
    )
}