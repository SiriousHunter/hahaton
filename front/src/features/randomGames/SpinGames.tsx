import { FC } from 'react'
import { PortalWrapper } from '_components/PortalWrapper'
import { AppLoader } from '_components/AppLoader'
import { useFetch } from '_hooks/useFetch.ts'
import styles from './styles.module.scss'

type TSpinGames = {
  isOpen: boolean
}

export const SpinGames: FC<TSpinGames> = ({ isOpen }) => {
  const { data, isFetchingData } = useFetch({ url: 'http://localhost:4000games/getRandom' })

  return (
    <PortalWrapper isOpen={isOpen}>
      <div className={styles.spinRandomGames}>
        <p className={styles.modalTitle}>Рандомная игра, на основе ваших предпочтений</p>

        {isFetchingData && <AppLoader />}

        {!isFetchingData && data && <div className={styles.spin}>sajkfnsdkj</div>}

        <button>Spin</button>
      </div>
    </PortalWrapper>
  )
}
