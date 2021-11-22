import React from 'react'
import { Form } from 'react-bootstrap'
import { Switch } from 'components/atoms'
import { BsArrowsFullscreen } from 'react-icons/bs'
import {
  Notification,
  Avatar,
  AvatarMenuProps,
  NotificationMenuProps
} from 'components/atoms'
import { useAuth, useTheme } from 'hooks'
import person from 'assets/images/person.jpg'
import styles from './styles.module.css'

const Nav: React.FC = () => {
  const { user, logout } = useAuth()
  const { toggleTheme, theme } = useTheme()

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

  const avatarMenu: AvatarMenuProps[] = [
    {
      label: 'Sair',
      onClick: logout
    }
  ]

  const notificationMenu: NotificationMenuProps[] = [
    {
      id: 0,
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat voluptas accusantium quasi, quibusdam vero laborum accusamus, mollitia, dolor autem sed voluptate? Repellendus laborum quis amet quidem sapiente quae aut?',
      onClick: () => console.log('test'),
      type: 'message'
    },
    {
      id: 1,
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat voluptas accusantium quasi, quibusdam vero laborum accusamus, mollitia, dolor autem sed voluptate? Repellendus laborum quis amet quidem sapiente quae aut?',

      onClick: () => console.log('test'),
      type: 'warning'
    }
  ]

  return (
    <div className={styles.navContainer}>
      <Form.Control
        className={styles.search}
        type="text"
        placeholder="Pesquisar..."
      />
      <Switch
        className={styles.switch}
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <Notification notificationMenu={notificationMenu} />
      <button className={styles.iconButton} onClick={handleFullscreen}>
        <BsArrowsFullscreen />
      </button>
      <Avatar name={user?.name} src={person} avatarMenu={avatarMenu} />
    </div>
  )
}

export default Nav
