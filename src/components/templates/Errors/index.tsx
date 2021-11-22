import React from 'react'
import { ErrorsContent, ErrorsContentProps } from 'components/organisms'
import { useBreakpoint } from 'hooks'
import styles from './styles.module.css'

export type ErrorsProps = ErrorsContentProps

const Errors: React.FC<ErrorsProps> = ({ isMobile, ...rest }) => {
  const { width } = useBreakpoint()
  isMobile = width < 768

  return (
    <div className={styles.errorContainer}>
      <ErrorsContent isMobile={isMobile} {...rest} />
    </div>
  )
}

export default Errors
