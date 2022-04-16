import styles from "../styles/subDivisao.module.css"
export default function SubDivisao(props){
    return (
        <div 
            style={{
                backgroundColor: props.preto ? "#000" : "#fff"
            }}
            className={styles.subdivisao}>
            
        </div>
    )
}