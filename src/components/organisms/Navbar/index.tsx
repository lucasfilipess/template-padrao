import React from 'react'
import logoRumo from 'assets/images/rumo.png'
import logoRumoDark from 'assets/images/rumoDark.png'
import { Nav } from 'components/molecules'
import { Drawer } from 'components/atoms'
import { useHistory } from 'react-router-dom'
import { useLayout, useTheme } from 'hooks'
import styles from './styles.module.css'

const Navbar: React.FC = () => {
  const { theme } = useTheme()
  const { handleToggleIsOpen } = useLayout()
  const { push } = useHistory()
  const isDark = theme === 'dark'

  return (
    <div className={styles.navbarContainer}>
      <Drawer onClick={handleToggleIsOpen} />
      <img
        onClick={() => push('/')}
        src={isDark ? logoRumoDark : logoRumo}
        alt="Rumo Soluções"
      />
      <Nav />
    </div>
  )
}

export default Navbar
