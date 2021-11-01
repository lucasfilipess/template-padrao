import React from 'react'
import classNames from 'classnames'
import { useTheme } from 'hooks'
import { ErrorsButtons } from 'components/molecules'
import styles from './styles.module.scss'

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
  const { isDark } = useTheme()
  return (
    <div className={styles.messageWrapper}>
      <h1 className={classNames(styles.title, { [styles.titleDark]: isDark })}>
        {title}
      </h1>
      <p
        className={classNames(styles.description, {
          [styles.descriptionDark]: isDark
        })}
      >
        {description}
      </p>
      {!isMobile && <ErrorsButtons isMobile={isMobile} />}
    </div>
  )
}

export default ErrorsMessage
