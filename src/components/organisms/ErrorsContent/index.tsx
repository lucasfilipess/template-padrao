import React from 'react'
import {
  ErrorsMessage,
  ErrorsButtons,
  ErrorsMessageProps
} from 'components/molecules'
import styles from './styles.module.css'

export type ErrorsContentProps = ErrorsMessageProps & {
  src: string
  alt: string
}

const ErrorsContent: React.FC<ErrorsContentProps> = ({
  src,
  alt,
  isMobile,
  ...rest
}) => {
  return (
    <>
      {isMobile && <ErrorsButtons isMobile={isMobile} />}
      <img src={src} alt={alt} className={styles.image} />
      <ErrorsMessage isMobile={isMobile} {...rest} />
    </>
  )
}

export default ErrorsContent
