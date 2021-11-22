import React, { ReactNode } from 'react'
import {
  Dropdown as BootstrapDropdown,
  DropdownProps as BootstrapDropdownProps
} from 'react-bootstrap'

export type MenusProps = {
  label: ReactNode
  onClick?: (arg?: unknown) => unknown
}[]

export type DropdownProps = BootstrapDropdownProps & {
  children?: ReactNode
  menus: MenusProps
}

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  menus,
  as,
  ...rest
}) => {
  return (
    <BootstrapDropdown {...rest}>
      <BootstrapDropdown.Toggle as={as}>{children}</BootstrapDropdown.Toggle>
      <BootstrapDropdown.Menu>
        {menus.map(({ label, onClick }, index) => (
          <BootstrapDropdown.Item
            key={`dropdown-${index}`}
            as="button"
            onClick={onClick}
          >
            {label}
          </BootstrapDropdown.Item>
        ))}
      </BootstrapDropdown.Menu>
    </BootstrapDropdown>
  )
}

export default Dropdown
