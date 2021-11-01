import React from 'react'
import {
  Form,
  FloatingLabel,
  FormControlProps
  // InputGroup,
  // OverlayTrigger,
  // Tooltip
} from 'react-bootstrap'
// import { BsInfoCircle, BsEyeSlash, BsEye } from 'react-icons/bs'
import styles from './styles.module.scss'
// import { useToggle } from 'hooks'

export type InputProps = FormControlProps & {
  feedback?: string
  info?: string
  label?: string
  name: string
  required?: boolean
  maskType?: 'cpfcnpj' | 'cep' | 'money' | 'phone'
}

const Input: React.FC<InputProps> = ({
  feedback,
  info,
  label,
  name,
  required = false,
  type,
  ...rest
}) => {
  return (
    <div className={styles.container}>
      <Form.Group>
        <FloatingLabel className={styles.label} controlId="input" label={label}>
          <Form.Control
            name={name}
            required={required}
            className={styles.input}
            type={type}
            as="textarea"
            {...rest}
          />
          <Form.Control.Feedback type="invalid">
            {feedback}
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>
    </div>
  )
}

export default Input
