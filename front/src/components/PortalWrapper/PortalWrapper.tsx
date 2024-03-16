import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styles from './styles.module.scss'

type PortalWrapper = {
  children: ReactNode
  isOpen: boolean
}
export const PortalWrapper: FC<PortalWrapper> = ({ children, isOpen }) =>
  isOpen && createPortal(<div className={styles.wrapper}>{children}</div>, document.body)
