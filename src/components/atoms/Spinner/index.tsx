import React from 'react'
import { Spinner as BootstrapSpinner } from 'react-bootstrap'
import styles from './styles.module.css'

const Spinner: React.FC = () => {
  return (
    <div className={styles.spinnerContainer}>
      <BootstrapSpinner animation="border" variant="primary" />
    </div>
  )
}

export default Spinner
