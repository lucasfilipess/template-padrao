import React, { useState } from 'react'
import { BsBell } from 'react-icons/bs'
import { Dropdown } from 'react-bootstrap'
import {
  BsFillChatLeftTextFill,
  BsExclamationTriangleFill,
  BsX
} from 'react-icons/bs'
import classNames from 'classnames'
import styles from './styles.module.css'

export type NotificationMenuProps = {
  id: number | string
  message: string
  type: 'message' | 'warning'
  wasRead?: boolean
  onClick: (arg?: unknown) => unknown
}

export type NotificationProps = {
  notificationMenu: NotificationMenuProps[]
}

const icons = {
  message: <BsFillChatLeftTextFill />,
  warning: <BsExclamationTriangleFill />
}

const Notification: React.FC<NotificationProps> = ({ notificationMenu }) => {
  const [menu, setMenu] = useState<NotificationMenuProps[]>(notificationMenu)

  const handleMarkAllAsRead = () => {
    setMenu(
      notificationMenu.map((notification) => ({
        ...notification,
        wasRead: true
      }))
    )
  }

  const handleRemove = (index: number) => {
    const aux = [...menu]
    aux.splice(index, 1)
    setMenu(aux)
  }

  return (
    <Dropdown>
      <Dropdown.Toggle as="button" className={styles.bell}>
        <BsBell />
        <span>{menu.length}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className={styles.menu}>
        <div className={styles.header}>
          <span>Notificações</span>
          <button onClick={handleMarkAllAsRead} className={styles.headerButton}>
            Marcar todas como lidas
          </button>
        </div>
        <div>
          {menu.map(({ id, message, onClick, type, wasRead }, index) => (
            <div
              key={`dropdown-item-${id}`}
              className={classNames(styles.menuItem, {
                [styles.wasRead]: wasRead
              })}
            >
              <div
                onClick={() =>
                  onClick({
                    message,
                    type,
                    wasRead
                  })
                }
              >
                {icons[type]}
                <p>{message}</p>
              </div>
              <button
                onClick={() => handleRemove(index)}
                className={styles.closeButton}
              >
                <BsX />
              </button>
            </div>
          ))}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Notification
