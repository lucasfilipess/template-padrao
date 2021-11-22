import React, { useEffect, useState } from 'react'
import { Breadcrumb as BootstrapBreadcrumb } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { MenusProps } from 'config'
import { MENUS } from 'config'
import styles from './styles.module.css'

const Breadcrumb: React.FC = () => {
  const { pathname } = useLocation()
  const [routes, setRoutes] = useState<MenusProps | undefined>()

  useEffect(() => {
    const getRoutes = () => {
      let route = MENUS.find(({ path }) => path === pathname)
      if (!route) {
        route = MENUS.reduce(
          (result, { subMenus = [] }) =>
            result.concat(subMenus?.filter(({ path }) => path === pathname)),
          [] as MenusProps[]
        )[0]
      }
      return route
    }
    setRoutes(getRoutes())
  }, [pathname])

  const customLink = (title?: string, path?: string) => {
    return (
      <Link className={styles.customLink} to={path || ''}>
        {title}
      </Link>
    )
  }

  return (
    <BootstrapBreadcrumb className={styles.breadcrumbContainer}>
      <BootstrapBreadcrumb.Item
        className={styles.link}
        linkAs={() => customLink('Início', '/')}
      />
      {routes && (
        <BootstrapBreadcrumb.Item
          className={styles.link}
          linkAs={() => customLink(routes?.title, routes?.path)}
        />
      )}
    </BootstrapBreadcrumb>
  )
}

export default Breadcrumb
