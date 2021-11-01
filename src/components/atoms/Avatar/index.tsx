import React from 'react'
import { Dropdown } from 'react-bootstrap'
import classNames from 'classnames'
import { useTheme } from 'hooks'
import styles from './styles.module.scss'

export type DropdownMenuProps = {
  label: string
  onClick: (arg?: unknown) => unknown
}

export type AvatarProps = {
  name: string
  src: string
  dropdownMenu: DropdownMenuProps[]
}

const Avatar: React.FC<AvatarProps> = ({ name, src, dropdownMenu }) => {
  const { isDark } = useTheme()
  return (
    <Dropdown>
      <Dropdown.Toggle
        as="button"
        className={classNames(styles.avatar, { [styles.avatarDark]: isDark })}
      >
        <img src={src} alt="Foto de perfil do usuário" />
        <span>{name}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className={classNames({ [styles.menuDark]: isDark })}>
        {dropdownMenu.map(({ label, onClick }, index) => (
          <Dropdown.Item
            key={`dropdown-item-${index}`}
            as="button"
            onClick={onClick}
            className={classNames(styles.item, { [styles.itemDark]: isDark })}
          >
            {label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Avatar
