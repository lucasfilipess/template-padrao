import { useEffect, useState } from 'react'

type WindowSizeProps = {
  width: number
}

const useBreakpoint = () => {
  const [windowSize, setWindowSize] = useState<WindowSizeProps>({
    width: 0
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [windowSize?.width])
  return windowSize
}

export default useBreakpoint
