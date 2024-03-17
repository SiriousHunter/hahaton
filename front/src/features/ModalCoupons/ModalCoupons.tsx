import { Coupon } from '_features/Coupon'
import styles from './styles.module.scss'
import { useRandomGames } from '_hooks/useRandomGames.ts'

export const ModalCoupons = () => {
  const { gamesConfig } = useRandomGames({ amount: 2 })
  return (
    <div className={styles.modalContent}>
      <ul className={styles.couponList}>
        {gamesConfig.map((el) => (
          <li key={el.id}>
            <Coupon config={el} />
          </li>
        ))}
      </ul>
    </div>
  )
}
