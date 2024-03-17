import { FC, ReactNode } from 'react'
import styles from './styles.module.scss'

type TSectionWrapper = {
  children: ReactNode
}
export const SectionWrapper: FC<TSectionWrapper> = ({ children }) => (
  <div className={styles.sectionWrapper}> {children}</div>
)
