import React from 'react'
import { Form, FormCheckProps } from 'react-bootstrap'
import classNames from 'classnames'
import { useTheme } from 'hooks'
import styles from './styles.module.scss'

export type CheckboxProps = FormCheckProps

const Checkbox: React.FC<CheckboxProps> = ({ ...rest }) => {
  const { isDark } = useTheme()
  return (
    <Form.Group>
      <Form.Check
        className={classNames(styles.formCheck, {
          [styles.formCheckDark]: isDark
        })}
        {...rest}
      />
    </Form.Group>
  )
}

export default Checkbox
