import styles from './styles.module.scss'

export const WheelRandomGames = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Random game</h3>


        <ul className={styles.wheel}>


        </ul>
      {/*<div>game wheel</div>*/}

      <button className={styles.button}>Spin</button>
    </div>
  )
}
