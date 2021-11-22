import React from 'react'
import { Dropdown } from 'react-bootstrap'
import styles from './styles.module.css'

export type AvatarMenuProps = {
  label: string
  onClick: (arg?: unknown) => unknown
}

export type AvatarProps = {
  name: string
  src: string
  avatarMenu: AvatarMenuProps[]
}

const Avatar: React.FC<AvatarProps> = ({ name, src, avatarMenu }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle as="button" className={styles.avatarContainer}>
        <img src={src} alt="Foto de perfil do usuário" />
        <span>{name}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {avatarMenu.map(({ label, onClick }, index) => (
          <Dropdown.Item
            key={`dropdown-item-${index}`}
            as="button"
            onClick={onClick}
            className={styles.dropdownItem}
          >
            {label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Avatar
