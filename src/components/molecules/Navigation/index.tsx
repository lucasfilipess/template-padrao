import React, { useState } from 'react'
import { Menu, SubMenu } from 'components/atoms'
import { MENUS } from 'config'
import styles from './styles.module.scss'

const Navigation: React.FC = () => {
  const [openedMenu, setOpenedMenu] = useState<number | null>(null)

  const handleOpenMenu = (id: number) => {
    if (openedMenu === id) setOpenedMenu(null)
    else setOpenedMenu(id)
  }

  return (
    <div className={styles.menu}>
      <ul className={styles.list}>
        {MENUS.map(({ id, icon, title, path, subMenus }) =>
          subMenus ? (
            <SubMenu
              key={id}
              id={id}
              isOpenMenu={openedMenu === id}
              icon={icon}
              title={title}
              path={path}
              subMenus={subMenus}
              onClick={() => handleOpenMenu(id)}
            />
          ) : (
            <Menu key={id} id={id} title={title} path={path} icon={icon} />
          )
        )}
      </ul>
    </div>
  )
}

export default Navigation
