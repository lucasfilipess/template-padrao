import React from 'react'
import classNames from 'classnames'
import logoRumo from 'assets/images/rumo.png'
import { Nav } from 'components/molecules'
import { Drawer } from 'components/atoms'
import { useHistory } from 'react-router-dom'
import { useLayout, useTheme } from 'hooks'
import styles from './styles.module.scss'

const Navbar: React.FC = () => {
  const { handleToggleIsOpen } = useLayout()
  const { isDark } = useTheme()
  const { push } = useHistory()
  return (
    <div
      className={classNames(styles.navbarContainer, {
        [styles.navbarContainerDark]: isDark
      })}
    >
      <Drawer onClick={handleToggleIsOpen} />
      <img onClick={() => push('/')} src={logoRumo} alt="Rumo Soluções" />
      <Nav />
    </div>
  )
}

export default Navbar
