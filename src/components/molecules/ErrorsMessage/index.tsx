import React from 'react'
import { ErrorsButtons } from 'components/molecules'
import styles from './styles.module.css'

export type ErrorsMessageProps = {
  title: string
  description: string
  isMobile?: boolean
}

const ErrorsMessage: React.FC<ErrorsMessageProps> = ({
  title,
  description,
  isMobile
}) => {
  return (
    <div className={styles.messageContainer}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      {!isMobile && <ErrorsButtons isMobile={isMobile} />}
    </div>
  )
}

export default ErrorsMessage
