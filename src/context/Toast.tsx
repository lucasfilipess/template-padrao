import React from 'react'
import { ToastContainer, Slide } from 'react-toastify'
import styles from 'components/atoms/Toast/styles.module.css'
import 'react-toastify/dist/ReactToastify.css'

const ToastProvider: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer
        className={styles.styledToast}
        transition={Slide}
        hideProgressBar={true}
        position="top-right"
        autoClose={3000}
      />
    </>
  )
}

export default ToastProvider
