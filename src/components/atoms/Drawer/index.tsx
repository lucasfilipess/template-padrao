import React from 'react'
import { BsList } from 'react-icons/bs'
import styles from './styles.module.css'

export type DrawerProps = {
  onClick(): void
}

const Drawer: React.FC<DrawerProps> = ({ onClick }) => {
  return (
    <button className={styles.toggleContainer} onClick={onClick}>
      <BsList />
    </button>
  )
}

export default Drawer
