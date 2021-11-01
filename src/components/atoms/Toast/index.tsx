import React from 'react'
import {
  BsExclamationTriangle,
  BsCheckCircle,
  BsInfoCircle
} from 'react-icons/bs'
import styles from './styles.module.scss'

export type ToastProps = {
  type: 'success' | 'warning' | 'error'
  message: string
}

const icons = {
  success: BsCheckCircle,
  warning: BsInfoCircle,
  error: BsExclamationTriangle
}

const Toast: React.FC<ToastProps> = ({ type, message }) => {
  const Icon = icons[type]
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <Icon className={styles[type]} />
      </div>
      <div className={styles.message}>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Toast
