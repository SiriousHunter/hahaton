import { FC } from 'react'
import { PortalWrapper } from '_components/PortalWrapper'
import { Coupon } from '_features/Coupon'

// MOCK-DATA
const MOCK_COUPON = {
  id: 'ery4je32e3e3423',
  img: 'f8716751-9ec4-4b64-890a-80906401108f',
  gameName: "7up endorpniana's"
}

type TModalOneCoupon = {
  isOpen: boolean
}
export const ModalOneCoupon: FC<TModalOneCoupon> = ({ isOpen }) => {
  // const [coupons, setCoupons] = useState(coupons)

  return (
    <PortalWrapper isOpen={isOpen}>
      <Coupon config={MOCK_COUPON} />
    </PortalWrapper>
  )
}
