import { useState } from 'react'
import { SectionWrapper } from '_components/SectionWrapper'
import { SpinGames } from '_features/randomGames/SpinGames.tsx'
import { AppButton } from '_components/AppButton'
import { ModalOneCoupon } from '_features/Coupon/ModalOneCoupon'
import { ModalCoupons } from '_features/Coupon/ModalCoupons/ModalCoupons.tsx'
import styles from './styles.module.scss'

export const FeatureSandbox = () => {
  const [isOpenRandomSpinGames, setIsOpenRandomSpinGames] = useState(false)
  const [isOpenCouponModal, setIsOpenCouponModal] = useState(false)
  const [isOpenManyCouponModal, setOpenManyCouponModal] = useState(false)

  const onOpenRandomSpinGames = () => {
    setIsOpenRandomSpinGames(true)
  }
  const onOpenCouponModal = () => {
    setIsOpenCouponModal(true)
  }

  return (
    <SectionWrapper>
      <h2>Примеры использования</h2>

      <div>
        Тут примеры реализации
        <button onClick={onOpenRandomSpinGames}>Получить рандомную игру</button>
        <AppButton onClick={onOpenCouponModal}>Открыть купон</AppButton>
        <AppButton onClick={() => setOpenManyCouponModal(true)}>
          Открыть несколько купонов
        </AppButton>
      </div>

      <div className={styles.sandboxSettings}>
        <h3>Настройки</h3>
        <div>Тут будет форма с настройками</div>
      </div>

      {isOpenRandomSpinGames && <SpinGames isOpen={isOpenRandomSpinGames} />}
      {isOpenCouponModal && <ModalOneCoupon isOpen={isOpenCouponModal} />}
      {isOpenManyCouponModal && <ModalCoupons isOpen={isOpenManyCouponModal} />}
    </SectionWrapper>
  )
}
