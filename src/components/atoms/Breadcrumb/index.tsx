import React, { useEffect, useState } from 'react'
import { Breadcrumb as BootstrapBreadcrumb } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { MenusProps } from 'config'
import { MENUS } from 'config'
import { useTheme } from 'hooks'
import styles from './styles.module.scss'

const Breadcrumb: React.FC = () => {
  const { pathname } = useLocation()
  const { isDark } = useTheme()
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
        className={classNames(styles.link, { [styles.linkDark]: isDark })}
        linkAs={() => customLink('Início', '/')}
      />
      {routes && (
        <BootstrapBreadcrumb.Item
          className={classNames(styles.link, { [styles.linkDark]: isDark })}
          linkAs={() => customLink(routes?.title, routes?.path)}
        />
      )}
    </BootstrapBreadcrumb>
  )
}

export default Breadcrumb
