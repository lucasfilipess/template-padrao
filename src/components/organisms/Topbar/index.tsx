import React from 'react'
import { Navigation } from 'components/molecules'
import styles from './styles.module.scss'

export type TopbarProps = {
  isOpen: boolean
}

const Topbar: React.FC<TopbarProps> = ({ isOpen }) => {
  return (
    <div
      className={`
        ${styles.sidebar} 
        ${isOpen && styles.open}
      `}
    >
      <Navigation />
    </div>
  )
}

export default Topbar
