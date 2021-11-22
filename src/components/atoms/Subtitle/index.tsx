import React from 'react'
import styles from './styles.module.css'

const Subtitle: React.FC = ({ children }) => {
  return <h4 className={styles.subtitle}>{children}</h4>
}

export default Subtitle
