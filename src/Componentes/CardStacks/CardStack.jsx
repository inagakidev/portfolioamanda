import styles from './CardStack.module.css'


function CardStack ({ nameArea, stacks }) {
  return (
    <div className={styles.cardStack}>
      <div className={styles.cardItem2}>
        <h3>{nameArea}</h3>

        {stacks.map((item, index) => (
          <div className={styles.stacksText} key={index}>
            <p>{item.nome}</p>
            <p>{item.nivel}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardStack