// import { useRandomGames } from '_hooks/useRandomGames.ts'
// import styles from './styles.module.scss'
// import {useEffect, useState} from 'react'
//
// const SPEED = 1000
// const WIDTH = 100
// const RANDOM = true
// const DISTANCE = 20 * WIDTH
//
// const playChances = {
//   blue: 79.92327,
//   purple: 15.98465,
//   pink: 3.19693,
//   red: 0.89515
// }
//
// const fakeChances = {
//   blue: 63,
//   purple: 23,
//   pink: 9,
//   red: 5
// }
//
// const mapChances = (chances) => {
//   return Object.fromEntries(
//     Object.entries(chances).map(([name], i) => [
//       name,
//       Object.values(chances)
//         .slice(0, i + 1)
//         .reduce((prev, cur) => prev + cur)
//     ])
//   )
// }
//
// const chancedRandom = (chances) => {
//   const random = Math.random()
//   const [name] = Object.entries(mapChances(chances)).find(([, chance]) => random * 100 < chance)
//   return name
// }
//
// export const RouletteRandomGames = () => {
//   const { gamesConfig } = useRandomGames({ amount: 5 })
//
//   const [properties, setProperties] = useState(gamesConfig)
//   const [margin, setMargin] = useState(0)
//
//   useEffect(() => {
//     const getRandomItem = (chances) => {
//       const rolledRarity = chancedRandom(chances)
//       const rolledItems = props.case.items
//         .map((itemName) => ({ name: itemName, ...items[itemName] }))
//         .filter(({ rarity }) => rarity === rolledRarity)
//       return _.sample(rolledItems)
//     }
//
//     const result = getRandomItem(playChances)
//     const itemWidth = 150 + 10
//     const resultIndex = _.random(40, 60)
//     const innerOffset = _.random(0, 0.99)
//
//     setProperties({
//       result: result.name,
//       items: [
//         ...new Array(resultIndex).fill().map(() => getRandomItem(fakeChances).name),
//         result.name,
//         ...new Array(4).fill().map(() => getRandomItem(fakeChances).name)
//       ],
//       offset: itemWidth * (resultIndex + innerOffset) - 250
//     })
//
//     setTimeout(() => props.onDrop(result), 10000)
//   }, [])
//
//   useEffect(() => setMargin(-properties?.offset), [properties?.offset])
//
//   return (
//     <div className={styles.content}>
//       <ul className={styles.roulette}>
//         {properties?.map(({ id, img }) => (
//           <li className={styles.rouletteGameItem} key={id}>
//             <img src={`${import.meta.env.VITE_BASE_IMG_URL}/${img}.jpg`} alt="" />
//           </li>
//         ))}
//       </ul>
//       <button className={styles.modalBtn}>
//         Spin
//       </button>
//     </div>
//   )
// }
