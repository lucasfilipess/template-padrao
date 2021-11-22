import React from 'react'
import {
  Button as BootstrapButton,
  ButtonProps as BootstrapButtonProps
} from 'react-bootstrap'
import classNames from 'classnames'
import './styles.css'

export type ButtonProps = BootstrapButtonProps

const Button: React.FC<ButtonProps> = ({ children, variant, ...rest }) => {
  const isSecondary = variant === 'secondary'
  const isOutline = variant === 'outline-primary'
  const isOutlineSecondary = variant === 'outline-secondary'
  const isLink = variant === 'link'

  return (
    <BootstrapButton
      className={classNames({
        secondary: isSecondary,
        outline: isOutline,
        secondaryOutline: isOutlineSecondary,
        link: isLink
      })}
      variant={variant}
      {...rest}
    >
      {children}
    </BootstrapButton>
  )
}

export default Button
