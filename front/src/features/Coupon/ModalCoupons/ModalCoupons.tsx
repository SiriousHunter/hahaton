import { FC } from 'react'
import { Coupon } from '_features/Coupon'
import styles from './styles.module.scss'

// Mock-data
import { mockCoupons } from '../../coupons.data.json'

type TModalCoupons = {
  isOpen: boolean
}
export const ModalCoupons: FC<TModalCoupons> = () => {
  return (
    <div className={styles.modalContainer}>
      <h3 className={styles.modalTitle}>Забери свой купон</h3>

      {mockCoupons.map((el, index) => (
        <Coupon key={index} config={el} />
      ))}
    </div>
  )
}
