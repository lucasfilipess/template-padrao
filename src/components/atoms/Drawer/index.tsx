import React from 'react'
import { BsList } from 'react-icons/bs'
import classNames from 'classnames'
import { useTheme } from 'hooks'
import styles from './styles.module.scss'

export type DrawerProps = {
  onClick(): void
}

const Drawer: React.FC<DrawerProps> = ({ onClick }) => {
  const { isDark } = useTheme()
  return (
    <button
      className={classNames(styles.toggle, { [styles.toggleDark]: isDark })}
      onClick={onClick}
    >
      <BsList />
    </button>
  )
}

export default Drawer
