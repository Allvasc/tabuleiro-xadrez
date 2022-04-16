import SubDivisao from "./subDivisao"
import styles from "../styles/linha.module.css"

export default function Lihna(props) {
    return (
        <div className={styles.linha}>
            <SubDivisao preto={props.preto}/>
            <SubDivisao preto={!props.preto} />
            <SubDivisao preto={props.preto}/>
            <SubDivisao preto={!props.preto} />
            <SubDivisao preto={props.preto}/>
            <SubDivisao preto={!props.preto} />
            <SubDivisao preto={props.preto}/>
            <SubDivisao preto={!props.preto} />
        </div>
    )
}