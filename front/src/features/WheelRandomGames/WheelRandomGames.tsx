import { useRef, useState } from 'react'
import { useRandomGames } from '_hooks/useRandomGames.ts'
import styles from './styles.module.scss'

export const WheelRandomGames = () => {
  const wheelRef = useRef(null)
  const { gamesConfig } = useRandomGames({ amount: 9 })
  const [rotation, setRotation] = useState(0)

  const prizeSlice = 360 / gamesConfig.length
  const prizeOffset = Math.floor(180 / gamesConfig.length)

  const onSpin = () => {
    setRotation((prev) => prev + Math.ceil(Math.random() * 3600))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.wheelContainer}>
        <ul ref={wheelRef} className={styles.wheel} style={{ transform: `rotate(${rotation}deg)` }}>
          {gamesConfig.map(({ gameName, img }, index) => {
            const rotate = prizeSlice * index * -1 - prizeOffset
            return (
              <li
                key={gameName}
                style={{ transform: `rotate(${rotate}deg)` }}
                className={styles.game}
              >
                <img src={`${import.meta.env.VITE_BASE_IMG_URL}/${img}.jpg`} alt={gameName} />
              </li>
            )
          })}
        </ul>
      </div>

      <button onClick={onSpin} className={styles.btn}>
        Spin
      </button>
    </div>
  )
}
