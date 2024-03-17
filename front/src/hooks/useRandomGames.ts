import { mockGames } from '_configs/mocData.ts'

type TUseRandomGames = {
  amount?: number
}
export const useRandomGames = ({ amount = 1 }: TUseRandomGames) => {
  const shuffledArray = mockGames.sort(() => Math.random() - 0.5)

  return {
    gamesConfig: shuffledArray.slice(0, amount)
  }
}
