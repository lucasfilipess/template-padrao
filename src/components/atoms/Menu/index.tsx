import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import classNames from 'classnames'
import { MenusProps } from 'config'
import { useLayout, useTheme } from 'hooks'
import styles from './styles.module.scss'

export type MenuProps = MenusProps

const Menu: React.FC<MenuProps> = ({ title, path, icon: Icon }) => {
  const { isOpen } = useLayout()
  const { isDark } = useTheme()
  const { pathname } = useLocation()
  const { push } = useHistory()
  const activated = path === pathname

  return (
    <li className={styles.menuWrapper}>
      <button
        className={classNames(styles.menuButton, {
          [styles.activatedMenuButton]: activated,
          [styles.menuButtonCollapse]: !isOpen,
          [styles.menuButtonDark]: isDark,
          [styles.activatedMenuButtonDark]: activated && isDark
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
