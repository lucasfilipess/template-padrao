import React from 'react'
import { Form, FormCheckProps } from 'react-bootstrap'

export type CheckboxProps = FormCheckProps

const Checkbox: React.FC<CheckboxProps> = ({ ...rest }) => {
  return (
    <Form.Group>
      <Form.Check {...rest} />
    </Form.Group>
  )
}

export default Checkbox
