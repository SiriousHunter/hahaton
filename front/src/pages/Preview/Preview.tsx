import { useState } from 'react'
import { Coupon } from '../../components/Coupon'
import headerImg from '../../../public/header.png'
import styles from './styles.module.scss'

export const Preview = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <img src={headerImg} alt=""className={styles.header}/>
      Превью
      <div>
        <button onClick={() => setIsOpen(true)} className={styles.btn}>
          Показать купон
        </button>

        <Coupon isOpen={isOpen} />
      </div>
    </div>
  )
}
