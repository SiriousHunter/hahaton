import { FC } from 'react'
import { PortalWrapper } from '../PortalWrapper/PortalWrapper.tsx'
import { ScratchCoupon } from './components/ScratchCoupon'
import styles from './styles.module.scss'

type TCoupon = {
  isOpen: boolean
}
export const Coupon: FC<TCoupon> = ({ isOpen }) => {
  return (
    <PortalWrapper isOpen={isOpen}>
      <div className={styles.couponWrapper}>
        <h3>Вы получили рандомный купон</h3>

        <div className={styles.vertical}></div>

        <div className={styles.couponBonus}>
          <ScratchCoupon />

          <span className={styles.winText}>Выигрыш</span>
        </div>
      </div>
    </PortalWrapper>
  )
}
