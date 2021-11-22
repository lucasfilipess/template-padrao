import React from 'react'
import { Form, FormSelectProps, FloatingLabel } from 'react-bootstrap'
import styles from './styles.module.css'

export type OptionsProps = {
  value: string
  label: string
  disabled?: boolean
}[]

export type SelectProps = FormSelectProps & {
  feedback?: string
  info?: string
  label?: string
  name: string
  options: OptionsProps
  required?: boolean
}

const Select: React.FC<SelectProps> = ({
  feedback,
  label,
  name,
  options,
  required = false,
  ...rest
}) => {
  return (
    <Form.Group className={styles.formGroup}>
      <FloatingLabel className="label" controlId="select" label={label}>
        <Form.Select
          className="select"
          name={name}
          required={required}
          {...rest}
        >
          {options.map(({ value, label, disabled }, index) => (
            <option disabled={disabled} key={`option-${index}`} value={value}>
              {label}
            </option>
          ))}
        </Form.Select>
        {feedback && (
          <Form.Control.Feedback type="invalid">
            {feedback}
          </Form.Control.Feedback>
        )}
      </FloatingLabel>
    </Form.Group>
  )
}

export default Select
