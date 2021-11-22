import React from 'react'
import {
  BsExclamationTriangle,
  BsCheckCircle,
  BsInfoCircle,
  BsShieldExclamation
} from 'react-icons/bs'
import classNames from 'classnames'
import styles from './styles.module.css'

export type ToastProps = {
  type: 'success' | 'warning' | 'error' | 'info'
  message: string
}

const icons = {
  success: BsCheckCircle,
  warning: BsExclamationTriangle,
  error: BsShieldExclamation,
  info: BsInfoCircle
}

const Toast: React.FC<ToastProps> = ({ type, message }) => {
  const Icon = icons[type]
  return (
    <div className={classNames(styles.toastContainer)}>
      <div className={styles.iconContainer}>
        <Icon className={styles[type]} />
      </div>
      <div>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  )
}

export default Toast
