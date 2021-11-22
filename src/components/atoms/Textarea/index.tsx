import React from 'react'
import { Form, FloatingLabel, FormControlProps } from 'react-bootstrap'

export type TextareaProps = FormControlProps & {
  feedback?: string
  label?: string
  name: string
  required?: boolean
}

const Textarea: React.FC<TextareaProps> = ({
  feedback,
  label,
  name,
  required = false,
  type,
  ...rest
}) => {
  return (
    <Form.Group>
      <FloatingLabel controlId="textarea" label={label}>
        <Form.Control
          as="textarea"
          name={name}
          required={required}
          type={type}
          {...rest}
        />
        <Form.Control.Feedback type="invalid">{feedback}</Form.Control.Feedback>
      </FloatingLabel>
    </Form.Group>
  )
}

export default Textarea
