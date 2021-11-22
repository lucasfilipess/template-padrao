import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import classNames from 'classnames'
import { MenusProps } from 'config'
import { useLayout } from 'hooks'
import styles from './styles.module.css'

export type MenuProps = MenusProps

const Menu: React.FC<MenuProps> = ({ title, path, icon: Icon }) => {
  const { isOpen } = useLayout()
  const { pathname } = useLocation()
  const { push } = useHistory()
  const activated = path === pathname

  return (
    <li className={styles.menuContainer}>
      <button
        className={classNames(styles.menuButton, {
          [styles.activatedMenuButton]: activated,
          [styles.menuButtonCollapse]: !isOpen
        })}
        onClick={() => push(path || '')}
      >
        {Icon && <Icon />}
        <span>{title}</span>
      </button>
    </li>
  )
}

export default Menu
