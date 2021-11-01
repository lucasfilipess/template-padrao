import React from 'react'
import classNames from 'classnames'
import { useTheme } from 'hooks'
import { Form, FormCheckProps } from 'react-bootstrap'
import styles from './styles.module.scss'

export type SwitchProps = FormCheckProps

const Switch: React.FC<SwitchProps> = ({ className, ...rest }) => {
  const { isDark } = useTheme()
  return (
    <Form.Group>
      <Form.Check
        className={classNames(className, styles.switch, {
          [styles.switchDark]: isDark
        })}
        type="switch"
        {...rest}
      />
    </Form.Group>
  )
}

export default Switch
