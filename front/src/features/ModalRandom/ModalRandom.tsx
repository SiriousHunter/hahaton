import { FC } from 'react'
import { PortalWrapper } from '_components/PortalWrapper'

type TModalRandom = {
  isOpen: boolean
}
export const ModalRandom: FC<TModalRandom> = ({ isOpen }) => {
  return (
    <PortalWrapper isOpen={isOpen}>
      <div>Купоны</div>

      <div>Рандом</div>
    </PortalWrapper>
  )
}
