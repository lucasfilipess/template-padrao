import React from 'react'
import { useTheme } from 'hooks'
import {
  Button as BootstrapButton,
  ButtonProps as BootstrapButtonProps
} from 'react-bootstrap'
import classNames from 'classnames'
import styles from './styles.module.scss'

export type ButtonProps = BootstrapButtonProps

const Button: React.FC<ButtonProps> = ({ children, variant, ...rest }) => {
  const { isDark } = useTheme()
  const isSecondary = variant === 'secondary'
  const isOutline = variant === 'outline-primary'
  const isOutlineSecondary = variant === 'outline-secondary'
  const isLink = variant === 'link'

  return (
    <BootstrapButton
      className={classNames(styles.button, {
        [styles.buttonDark]: isDark,
        [styles.secondary]: isSecondary,
        [styles.secondaryDark]: isSecondary && isDark,
        [styles.outline]: isOutline,
        [styles.outlineDark]: isOutline && isDark,
        [styles.secondaryOutline]: isOutlineSecondary,
        [styles.secondaryOutlineDark]: isOutlineSecondary && isDark,
        [styles.link]: isLink,
        [styles.linkDark]: isLink && isDark
      })}
      variant={variant}
      {...rest}
    >
      {children}
    </BootstrapButton>
  )
}

export default Button
