import React, { createContext } from 'react'
import { useToggle } from 'hooks'
import { STORAGE_NAME } from 'config'

export type LayoutContextProps = {
  isOpen: boolean
  handleToggleIsOpen: () => void
}

export const LayoutContext = createContext<LayoutContextProps>(
  {} as LayoutContextProps
)

const LayoutProvider: React.FC = ({ children }) => {
  const storage = localStorage.getItem(`${STORAGE_NAME}:layout`)
  const initialState: boolean = !storage
    ? true
    : storage === 'true'
    ? true
    : false
  const [isOpen, toggleIsOpen] = useToggle(initialState)

  const handleToggleIsOpen = () => {
    toggleIsOpen()
    localStorage.setItem(`${STORAGE_NAME}:layout`, JSON.stringify(!isOpen))
  }

  return (
    <LayoutContext.Provider value={{ isOpen, handleToggleIsOpen }}>
      {children}
    </LayoutContext.Provider>
  )
}

export default LayoutProvider
