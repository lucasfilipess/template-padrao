import React, { useRef, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { Collapse, Overlay } from 'react-bootstrap'
import { BsChevronLeft, BsChevronDown } from 'react-icons/bs'
import classNames from 'classnames'
import { useLayout } from 'hooks'
import { MenusProps } from 'config'
import styles from './styles.module.css'

export type SubMenuProps = MenusProps & {
  onClick: () => void
  isOpenMenu: boolean
}

const SubMenu: React.FC<SubMenuProps> = ({
  title,
  icon: Icon,
  subMenus,
  onClick,
  isOpenMenu
}) => {
  const { isOpen } = useLayout()
  const { pathname } = useLocation()
  const { push } = useHistory()
  const [show, setShow] = useState(false)
  const target = useRef<HTMLButtonElement>(null)
  const activated = subMenus?.some(({ path }) => path === pathname)

  const handleMouseEnter = () => {
    setShow(true)
  }

  const handleMouseLeave = () => {
    setShow(false)
  }

  if (isOpen)
    return (
      <li className={styles.subMenuContainer}>
        <button
          aria-controls="collapse"
          aria-expanded={isOpenMenu}
          className={classNames(styles.subMenuButton, {
            [styles.activatedSubMenuButton]: activated
          })}
          onClick={onClick}
        >
          {Icon && <Icon />}
          <span>{title}</span>
          {isOpenMenu ? <BsChevronDown /> : <BsChevronLeft />}
        </button>
        <Collapse in={isOpenMenu} appear>
          <ul id="collapse" className={styles.subMenuList}>
            {subMenus?.map(({ id, title, path }) => (
              <li key={`sub-menu-${id}`} className={styles.subMenuListItem}>
                <button
                  className={classNames(styles.subMenuListButton, {
                    [styles.activatedSubMenuListButton]: path === pathname
                  })}
                  onClick={() => push(path ?? '')}
                >
                  <span>{title}</span>
                </button>
              </li>
            ))}
          </ul>
        </Collapse>
      </li>
    )

  return (
    <>
      <li className={styles.subMenuContainer}>
        <button
          onClick={onClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={classNames(styles.subMenuButtonCollapse, {
            [styles.activatedSubMenuButtonCollapse]: activated
          })}
          ref={target}
        >
          {Icon && <Icon />}
          <span>{title}</span>
        </button>
      </li>
      <Overlay target={target.current} show={show} placement="right-start">
        {({ ...props }) => (
          <ul
            className={styles.subMenuListCollapsed}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
          >
            {subMenus?.map(({ id, title, path }) => (
              <li
                key={`sub-menu-${id}`}
                className={styles.subMenuListItemCollapsed}
              >
                <button
                  className={classNames(styles.subMenuListButtonCollapse, {
                    [styles.activatedSubMenuListButtonCollapse]:
                      path === pathname
                  })}
                  onClick={() => push(path ?? '')}
                >
                  <span>{title}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </Overlay>
    </>
  )
}
export default SubMenu
