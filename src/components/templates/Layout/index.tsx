import React from 'react'
import { Navbar, Sidebar } from 'components/organisms'
import { Breadcrumb } from 'components/atoms'
import { useLayout } from 'hooks'
import styles from './styles.module.css'

const Layout: React.FC = ({ children }) => {
  const { isOpen } = useLayout()
  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <Sidebar isOpen={isOpen} />
      <div className={styles.contentContainer}>
        <Breadcrumb />
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  )
}

export default Layout
