import React from 'react'
import classNames from 'classnames'
import { useTheme } from 'hooks'
import styles from './styles.module.scss'

const Title: React.FC = ({ children }) => {
  const { isDark } = useTheme()
  return (
    <h1 className={classNames(styles.title, { [styles.titleDark]: isDark })}>
      {children}
    </h1>
  )
}

export default Title
