import styles from './CardStack.module.css'


export default function CardStack ({ icon, stackName}) {
  return (
    <section className={styles.cardStack}
    >
      <span className={styles.icone}>{icon}</span>
      <p className={styles.name}>{stackName}</p>
    </section>
  )
}