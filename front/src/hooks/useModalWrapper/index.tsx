import { useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './styles.module.scss'

export const useModalWrapper = ({ modalComponent }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const Modal = () =>
    isOpenModal &&
    createPortal(<div className={styles.wrapper}>{modalComponent}</div>, document.body)

  return {
    isOpenModal,
    setIsOpenModal,
    Modal
  }
}
