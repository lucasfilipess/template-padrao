import { useContext } from 'react'
import { LayoutContext } from 'context'

const useLayout = () => {
  const context = useContext(LayoutContext)
  return context
}

export default useLayout
