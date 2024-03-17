import { Coupon } from '_features/Coupon'
import { useRandomGames } from '_hooks/useRandomGames.ts'
import styles from './styles.module.scss'

export const ModalRandom = () => {
  const { gamesConfig } = useRandomGames({ amount: 2 })

  return (
    <div className={styles.modalRandomGame}>
      <div>
        <p className={styles.subtitle}>Выберите купон</p>

        <ul className={styles.couponList}>
          {gamesConfig.map((el) => (
            <li key={el.id}>
              <Coupon config={el} />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className={styles.subtitle}>Выиграйте рандомую игру</p>

        <div>

        </div>
      </div>
    </div>
  )
}
