import { FC } from 'react'
import styles from './styles.module.scss'

type TAppList = {
  config: string[]
  title?: string
}
export const AppList: FC<TAppList> = ({ config, title }) => (
  <ul className={styles.list}>
    {title && <p>{title}</p>}
    {config.map((el, index) => (
      <li key={index}>{`${index + 1}. ${el}`}</li>
    ))}
  </ul>
)
