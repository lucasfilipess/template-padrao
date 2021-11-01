import React from 'react'
// import { AiOutlineInfoCircle } from 'react-icons/ai'
import classNames from 'classnames'
import {
  Form,
  FormSelectProps,
  FloatingLabel
  // OverlayTrigger,
  // Tooltip
} from 'react-bootstrap'
import { useTheme } from 'hooks'
import styles from './styles.module.scss'

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
  // info,
  label,
  name,
  options,
  required = false,
  ...rest
}) => {
  const { isDark } = useTheme()

  return (
    <Form.Group>
      <FloatingLabel
        className={classNames(styles.label, { [styles.labelDark]: isDark })}
        controlId="select"
        label={label}
      >
        <Form.Select
          className={classNames(styles.select, { [styles.selectDark]: isDark })}
          name={name}
          required={required}
          {...rest}
        >
          {options.map(({ value, label, disabled }, index) => (
            <option disabled={disabled} key={index} value={value}>
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
