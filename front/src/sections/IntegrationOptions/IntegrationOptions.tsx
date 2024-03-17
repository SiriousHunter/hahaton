import { SectionWrapper } from '_components/SectionWrapper'
import siteWithGame from '../../../public/siteWithGame.png'
import siteImgReplaceBlock from '../../../public/siteImgReplaceBlock.png'
import styles from './styles.module.scss'
import { Coupon } from '_features/Coupon'
import { ModalRandom } from '_features/ModalRandom/ModalRandom.tsx'

export const IntegrationOptions = () => {
  return (
    <SectionWrapper>
      <div className={styles.couponsSection}>
        <h2 className={styles.sectionTitle}>Варианты интеграции</h2>

        <div className={styles.integrationVariant}>
          <h3 className={styles.subtitle}>Показ попав</h3>
          <img src={siteWithGame} alt="" />

          <div className={styles.randomModalWrapper}>
            <ModalRandom />
          </div>
        </div>

        <div className={styles.integrationVariant}>
          <h3 className={styles.subtitle}>Использование в текущих блоках</h3>

          <img src={siteImgReplaceBlock} alt="" />

          <div className={styles.couponBlock}>
            <Coupon config={{ label: 'FreeSpin ', id: 'tesfsafsadf' }} />
          </div>

          <div className={styles.spinerRandomGame}>{/*  GameSpiner*/}</div>
        </div>
      </div>
    </SectionWrapper>
  )
}
