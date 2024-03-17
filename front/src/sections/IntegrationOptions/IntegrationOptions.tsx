import { SectionWrapper } from '_components/SectionWrapper'
import { Coupon } from '_features/Coupon'
import siteWithGame from '../../../public/siteWithGame.png'
import siteImgReplaceBlock from '../../../public/siteImgReplaceBlock.png'
import styles from './styles.module.scss'
import { ModalRandom } from '_features/ModalRandom/ModalRandom.tsx'
import { ModalWrapper } from '_components/ModalWrapeer'

const mockCoupon = {
  gameName: 'HotPatrick',
  img: '2675a841-55da-4059-8ceb-080e92f43fb9',
  id: 'BarsAndBells'
}

export const IntegrationOptions = () => {
  return (
    <SectionWrapper>
      <div className={styles.couponsSection}>
        <h2 className={styles.sectionTitle}>Варианты интеграции</h2>

        <div className={styles.integrationVariant}>
          <h3 className={styles.subtitle}>Показ модального окна</h3>
          <img src={siteWithGame} alt="" />

          <div className={styles.randomModalWrapper}>
            <ModalWrapper isOpen title="Получите рандомную игру">
              <ModalRandom />
            </ModalWrapper>
          </div>
        </div>

        <div className={styles.integrationVariant}>
          <h3 className={styles.subtitle}>Использование в текущих блоках</h3>

          <img src={siteImgReplaceBlock} alt="" />

          <div className={styles.couponBlock}>
            <Coupon config={mockCoupon} />
          </div>

          <div className={styles.spinerRandomGame}>{/*  GameSpiner*/}</div>
        </div>
      </div>
    </SectionWrapper>
  )
}
