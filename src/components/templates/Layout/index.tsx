import React from 'react'
import classNames from 'classnames'
import { Navbar, Sidebar, Topbar } from 'components/organisms'
import { Breadcrumb } from 'components/atoms'
import { useLayout, useTheme } from 'hooks'
import styles from './styles.module.scss'

const Layout: React.FC = ({ children }) => {
  const { isOpen } = useLayout()
  const { isDark } = useTheme()
  return (
    <div className={styles.layout}>
      <Navbar />
      <Topbar isOpen={isOpen} />
      <Sidebar isOpen={isOpen} />
      <div
        className={classNames(styles.container, {
          [styles.contentDark]: isDark
        })}
      >
        <Breadcrumb />
        <main
          className={classNames(styles.content, {
            [styles.contentDark]: isDark
          })}
        >
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
