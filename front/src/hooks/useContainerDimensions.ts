import { MutableRefObject, useEffect, useState } from 'react'

type TUseContainerDimensions = {
  ref: MutableRefObject<any>
}
export const useContainerDimensions = ({ ref }: TUseContainerDimensions) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const getDimensions = () => ({
      width: ref?.current.offsetWidth,
      height: ref?.current.offsetHeight
    })

    const handleResize = () => {
      setDimensions(getDimensions())
    }

    if (ref?.current) {
      setDimensions(getDimensions())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [ref])

  return dimensions
}
