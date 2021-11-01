import React from 'react'
import { Navigation } from 'components/molecules'
import { useTheme } from 'hooks'
import clasNames from 'classnames'
import styles from './styles.module.scss'

export type SidebarProps = {
  isOpen: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const { isDark } = useTheme()
  return (
    <div
      className={clasNames(styles.sidebar, {
        [styles.open]: isOpen,
        [styles.sidebarDark]: isDark
      })}
    >
      <Navigation />
    </div>
  )
}

export default Sidebar
