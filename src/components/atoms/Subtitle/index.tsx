import React from 'react'
import className from 'classnames'
import { useTheme } from 'hooks'
import styles from './styles.module.scss'

const Subtitle: React.FC = ({ children }) => {
  const { isDark } = useTheme()
  return (
    <h4
      className={className(styles.subtitle, { [styles.subtitleDark]: isDark })}
    >
      {children}
    </h4>
  )
}

export default Subtitle
