import styles from './styles.module.scss'
import { useRef, useState } from 'react'
// import {spinertia} from '_features/WheelRandomGames/utils'
//
// const AMOUNT_GAMES = mockGames.length

export const WheelRandomGames = () => {
  const wheelRef = useRef(null)
  // const [rotation, setRotation] = useState(0)
  // const [currentSlice, setCurrentSlice] = useState(0)
  //
  // const prizeSlice = 360 / AMOUNT_GAMES
  // const prizeOffset = Math.floor(180 / AMOUNT_GAMES)

  const onSpinWheel = () => {
    // const selectedItem = Math.floor(Math.random() * AMOUNT_GAMES
  }

  return (
    <div className={styles.wrapper}>
      {/*<ul className={styles.wheel} ref={wheelRef} style={{transform: `rotate(${rotation}deg)`}}>*/}
      {/*    {mockGames.map(({img}, index) => {*/}
      {/*        // const rotation = prizeSlice * index * -1 - prizeOffset*/}

      {/*        return (*/}
      {/*            <li className={styles.game} style={{transform: `rotate(${rotation}deg)`}} key={index}>*/}
      {/*                <img src={`http://localhost/images/${img}.jpg`} alt=""/>*/}
      {/*            </li>*/}
      {/*        )*/}
      {/*    })}*/}
      {/*</ul>*/}

      <button className={styles.button} onClick={onSpinWheel}>
        Spin
      </button>
    </div>
  )
}
