import { SectionWrapper } from '_components/SectionWrapper'
import styles from './styles.module.scss'

export const Preview = () => (
  <SectionWrapper>
    <div className={styles.content}>
      <h1 className={styles.featureTitle}>Рандомные Игры</h1>

      <h2 className={styles.group}>Команда: Бага_на_Год</h2>

      <ul className={styles.groupList}>
        <p>Состав:</p>
        <li>Синявский Вадим</li>
        <li>Бобков Виталий</li>
        <li>Шереметьев Сергей</li>
      </ul>
    </div>
  </SectionWrapper>
)
