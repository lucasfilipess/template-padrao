import React from 'react'
import { BsBell } from 'react-icons/bs'
import styles from './styles.module.scss'

export type NotificationProps = {
  count: number
}

const Notification: React.FC<NotificationProps> = ({ count }) => {
  return (
    <button className={styles.bell}>
      <BsBell />
      <span>{count}</span>
    </button>
  )
}

export default Notification
