import { FC, ReactNode } from 'react'
import styles from './styles.module.scss'

type TModalWrapper = {
  isOpen: boolean
  title?: string
  children: ReactNode
}
export const ModalWrapper: FC<TModalWrapper> = ({ isOpen, title, children }) =>
  isOpen && (
    <div className={styles.modalWrapper}>
      {title && <h3 className={styles.modalTitle}>{title}</h3>}
      {children}
    </div>
  )
