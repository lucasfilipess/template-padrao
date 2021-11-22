import React from 'react'
import classNames from 'classnames'
import { Form, FormCheckProps } from 'react-bootstrap'
import './styles.css'

export type SwitchProps = FormCheckProps

const Switch: React.FC<SwitchProps> = ({ className, ...rest }) => {
  return (
    <Form.Group>
      <Form.Check
        className={classNames(className, 'switch')}
        type="switch"
        {...rest}
      />
    </Form.Group>
  )
}

export default Switch
