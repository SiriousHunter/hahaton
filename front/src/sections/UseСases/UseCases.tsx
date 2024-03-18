import { SectionWrapper } from '_components/SectionWrapper'
import { ModalCoupons } from '_features/ModalCoupons/ModalCoupons.tsx'
import siteWithGame from '../../../public/siteWithGame.png'
import styles from './styles.module.scss'
import { WheelRandomGames } from '_features/WheelRandomGames'
import { RouletteRandomGames } from '_features/RouletteRandomGames'
import { ModalWrapper } from '_components/ModalWrapeer'

export const UseCases = () => {
  return (
    <SectionWrapper>
      <h2 className={styles.sectionTitle}>Варианты использования</h2>

      <ul className={styles.useCaseList}>
        <p>Критерии:</p>
        <li>
          - Универсальный компоненты, которые легко изменяются под разные задачи (размещение на
          разных страницах, различные события)
        </li>
        <li> - Возможность расширять функционал (добавлять бонусные механики)</li>
        <li> - Интуитивно понятный интерфейс, позволяющий в пару кликов получать случайную игру</li>
      </ul>

      <div className={styles.caseItem}>
        <h3 className={styles.subtitle}>Колесо</h3>

        <img src={siteWithGame} alt="" />

        <ModalWrapper title="Колесо с рандомными играми" isOpen>
          <WheelRandomGames />
        </ModalWrapper>
      </div>

      <div className={styles.caseItem}>
        <h3 className={styles.subtitle}>Roulette</h3>

        <img src={siteWithGame} alt="" />

        <ModalWrapper title="Roulette Random Games" isOpen>
          <RouletteRandomGames />
        </ModalWrapper>
      </div>

      <div className={styles.caseItem}>
        <h3 className={styles.subtitle}>Купоны</h3>

        <img src={siteWithGame} alt="" />

        <ModalWrapper isOpen title="Забери свой купон">
          <ModalCoupons />
        </ModalWrapper>
      </div>
    </SectionWrapper>
  )
}
