import React from 'react'
import MaskedInput from 'react-text-mask'
import classNames from 'classnames'
import {
  Form,
  FloatingLabel,
  FormControlProps,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap'
import { BsFillInfoCircleFill, BsEyeSlash, BsEye } from 'react-icons/bs'
import { cpf, cnpj, cep, money, phone } from './masks'
import { useToggle, useTheme } from 'hooks'
import styles from './styles.module.scss'

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
  maskType,
  required = false,
  type,
  ...rest
}) => {
  const { isDark } = useTheme()
  const [visible, toggleVisible] = useToggle(false)
  const isPassword = type === 'password'

  const isCpfOrCnpj = (rawValue: string) => {
    return rawValue.length < 15 ? cpf : cnpj
  }

  const mask =
    maskType === 'cep'
      ? cep
      : maskType === 'phone'
      ? phone
      : maskType === 'money'
      ? money
      : maskType === 'cpfcnpj'
      ? isCpfOrCnpj
      : false

  const maskProps = mask && {
    as: MaskedInput,
    guide: false,
    mask
  }

  return (
    <div className={styles.container}>
      {info && (
        <OverlayTrigger
          delay={{ show: 250, hide: 400 }}
          overlay={(overlayTriggerProps) => (
            <Tooltip id="info-tooltip" {...overlayTriggerProps}>
              {info}
            </Tooltip>
          )}
          placement="top"
          trigger={['hover', 'focus']}
        >
          <span className={styles.adornment}>
            <BsFillInfoCircleFill color="#94acc8" />
          </span>
        </OverlayTrigger>
      )}
      {isPassword && (
        <>
          {visible ? (
            <button
              type="button"
              onClick={toggleVisible}
              className={styles.adornment}
            >
              <BsEye color="#6A6A6A" />
            </button>
          ) : (
            <button
              type="button"
              onClick={toggleVisible}
              className={styles.adornment}
            >
              <BsEyeSlash color="#6A6A6A" />
            </button>
          )}
        </>
      )}
      <Form.Group>
        <FloatingLabel
          className={classNames(styles.label, { [styles.labelDark]: isDark })}
          label={label}
        >
          <Form.Control
            name={name}
            required={required}
            className={classNames(styles.input, {
              [styles.fixAdornment]: info || isPassword,
              [styles.inputDark]: isDark
            })}
            type={!isPassword ? type : visible ? 'text' : 'password'}
            {...maskProps}
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
