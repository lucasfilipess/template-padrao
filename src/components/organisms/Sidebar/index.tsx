import React from 'react'
import { Navigation } from 'components/molecules'
import classNames from 'classnames'
import styles from './styles.module.css'

export type SidebarProps = {
  isOpen: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={classNames(styles.sidebarContainer, {
        [styles.sidebarIsOpen]: isOpen
      })}
    >
      <Navigation />
    </div>
  )
}

export default Sidebar
