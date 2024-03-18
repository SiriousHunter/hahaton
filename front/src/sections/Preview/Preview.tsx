import { SectionWrapper } from '_components/SectionWrapper'
import { AppList } from '_components/AppList'
import styles from './styles.module.scss'

const taskList = [
  'Реализовать удобный, легко интегрируемый, и простой в использовании интерфейс для выдачи игроку случайной игры на основе алгоритма рекомендаций',
  'Реализовать рекомендательный алгоритм, который учитывает схожесть игр и предпочтения игрока'
]

export const Preview = () => (
  <SectionWrapper>
    <div className={styles.content}>
      <h1 className={styles.featureTitle}>Рандомные Игры</h1>

      <h2 className={styles.group}>Команда: Бага_на_Год</h2>

      <AppList title="Задачи:" config={taskList} />
    </div>
  </SectionWrapper>
)
