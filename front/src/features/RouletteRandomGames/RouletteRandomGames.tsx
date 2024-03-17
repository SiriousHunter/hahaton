import { useRandomGames } from '_hooks/useRandomGames.ts'
import styles from './styles.module.scss'

export const RouletteRandomGames = () => {
  const { gamesConfig } = useRandomGames({ amount: 5 })

  return (
    <div className={styles.content}>
      <ul className={styles.roulette}>
        {gamesConfig.map(({ img, id }) => (
          <li className={styles.rouletteGameItem} key={id}>
            <img src={`${import.meta.env.VITE_BASE_IMG_URL}/${img}.jpg`} alt="" />
          </li>
        ))}
      </ul>

      <button className={styles.modalBtn}>Spin</button>
    </div>
  )
}
