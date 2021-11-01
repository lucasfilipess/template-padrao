import React from 'react'
import { ToastContainer, Zoom } from 'react-toastify'
import styles from 'components/atoms/Toast/styles.module.scss'
import 'react-toastify/dist/ReactToastify.css'

const ToastProvider: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer
        className={styles.styledToast}
        transition={Zoom}
        hideProgressBar={true}
        position="top-right"
        autoClose={3000}
      />
    </>
  )
}

export default ToastProvider
