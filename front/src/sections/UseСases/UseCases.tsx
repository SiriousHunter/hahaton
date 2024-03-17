import { SectionWrapper } from '_components/SectionWrapper'
import { ModalCoupons } from '_features/Coupon/ModalCoupons/ModalCoupons.tsx'
import siteWithGame from '../../../public/siteWithGame.png'
import styles from './styles.module.scss'
import { WheelRandomGames } from '_features/WheelRandomGames'

export const UseCases = () => {
  return (
    <SectionWrapper>
      <h2 className={styles.sectionTitle}>Варианты испольщования</h2>

      <div className={styles.caseItem}>
        <h3 className={styles.subtitle}>Колесо</h3>

        <img src={siteWithGame} alt="" />

        <div className={styles.modalWrapperRandomGames}>
          <WheelRandomGames />
        </div>
      </div>

      <div className={styles.caseItem}>
        <h3 className={styles.subtitle}>Roulette</h3>

        <img src={siteWithGame} alt="" />

        {/*    RandomGameRoulette*/}
      </div>

      <div className={styles.caseItem}>
        <h3 className={styles.subtitle}>Купоны</h3>

        <img src={siteWithGame} alt="" />

        <ModalCoupons isOpen />
      </div>
    </SectionWrapper>
  )
}
