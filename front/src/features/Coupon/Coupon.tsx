import { FC, useState } from 'react'
import { clsx } from 'clsx'
import { Canvas } from '_components/Canvas'
import styles from './styles.module.scss'

type TCoupon = {
  config: {
    id: string
    label: string
  }
}

export const Coupon: FC<TCoupon> = ({ config }) => {
  const [isUsedCoupon, setIsUsedCoupon] = useState(false)
  const onClearScratch = () => {
    // fetch({gamblerId: id, couponId: config.id})
    setIsUsedCoupon(true)
  }

  const couponScratchClasses = clsx([
    styles.couponScratch,
    {
      [styles.couponScratched]: isUsedCoupon
    }
  ])

  return (
    <div className={styles.couponWrapper}>
      <button className={styles.couponBonus} onClick={onClearScratch} disabled={isUsedCoupon}>
        <span className={styles.winText}>{config.label}</span>

        <Canvas className={couponScratchClasses} isUsedCoupon={isUsedCoupon} />
      </button>
    </div>
  )
}
