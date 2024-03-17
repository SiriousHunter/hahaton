import { FC, useRef, useState } from 'react'
import { clsx } from 'clsx'
import { Canvas } from '_components/Canvas'
import styles from './styles.module.scss'
import { useContainerDimensions } from '_hooks/useContainerDimensions.ts'

type TCoupon = {
  config: {
    id: string
    img: string
    gameName: string
  }
}
export const Coupon: FC<TCoupon> = ({ config }) => {
  const refCouponButton = useRef(null)
  const { width, height } = useContainerDimensions({ ref: refCouponButton })

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
      <button
        ref={refCouponButton}
        className={styles.couponBonus}
        onClick={onClearScratch}
        disabled={isUsedCoupon}
      >
        <img src={`${import.meta.env.VITE_BASE_IMG_URL}/${config.img}.jpg`} alt={config.gameName} />

        <Canvas
          className={couponScratchClasses}
          isUsedCoupon={isUsedCoupon}
          width={width}
          height={height}
        />
      </button>
    </div>
  )
}
