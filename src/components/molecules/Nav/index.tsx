import React from 'react'
import { Form } from 'react-bootstrap'
import { Switch } from 'components/atoms'
import { BsArrowsFullscreen } from 'react-icons/bs'
import { Notification, Avatar, DropdownMenuProps } from 'components/atoms'
import classNames from 'classnames'
import { useAuth, useTheme } from 'hooks'
import person from 'assets/images/person.jpg'
import styles from './styles.module.scss'

const Nav: React.FC = () => {
  const { user, logout } = useAuth()
  const { isDark, toggleTheme, theme } = useTheme()

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  const dropdownMenu: DropdownMenuProps[] = [
    {
      label: 'Sair',
      onClick: logout
    }
  ]

  return (
    <div className={classNames(styles.nav, { [styles.navDark]: isDark })}>
      <Form.Control
        className={classNames(styles.search, { [styles.searchDark]: isDark })}
        type="text"
        placeholder="Pesquisar..."
      />
      <Switch
        className={styles.switch}
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <Notification count={2} />
      <button
        className={classNames(styles.iconButton, {
          [styles.iconButtonDark]: isDark
        })}
        onClick={handleFullscreen}
      >
        <BsArrowsFullscreen />
      </button>
      <Avatar name={user?.name} src={person} dropdownMenu={dropdownMenu} />
    </div>
  )
}

export default Nav
