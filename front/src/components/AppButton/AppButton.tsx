import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import styles from './styles.module.scss'

type TAppButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}
export const AppButton: FC<TAppButton> = ({ children, ...props }) => (
  <button {...props} className={styles.appBtn}>
    {children}
  </button>
)
