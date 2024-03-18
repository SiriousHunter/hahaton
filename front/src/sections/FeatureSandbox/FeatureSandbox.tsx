import { SectionWrapper } from '_components/SectionWrapper'
import { AppList } from '_components/AppList/AppList.tsx'

const content = {
  peoplePreference: ['Страна', 'Возраст', 'Девайс с которого чаще всего играет'],
  gameConfig: [
    'Максимальная ставка',
    'Провайдер',
    'Наличие бонусной игры',
    'Наличие риск игры (удвоение выигрыша в мини игре)',
    'RTP',
    'Бонусные механики для игры от казино (турниры/кешбек/фсп/левелы и тд)',
    'Популярность среди игроков',
    'Популярность среди игроков схожей группы',
    'Наличие истории игр в слоты схожей группы',
    'Волатильность/дисперсия'
  ]
}

export const FeatureSandbox = () => {
  return (
    <SectionWrapper>
      <h2>Алгоритм подбора</h2>

      <AppList
        title="Подбор игр на основе предпочтений игрока / схожих с ним групп игроков:"
        config={content.peoplePreference}
      />

      <AppList
        title="Подбор игр на основе схожих игр по различным метрикам:"
        config={content.gameConfig}
      />
    </SectionWrapper>
  )
}
