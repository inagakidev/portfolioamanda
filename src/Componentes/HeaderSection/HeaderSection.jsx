import styles from './HeaderSection.module.css'

function HeaderSection ({label, titulo, span}) {
    return (
        <div className={styles.headerSection}>
            <span className={styles.label}>{label}</span>
            <h2 className={styles.titulo}> {titulo} <span className={styles.textGradient}>{span}</span></h2>
        </div>
    )

}

export default HeaderSection