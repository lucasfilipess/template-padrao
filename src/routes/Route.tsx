import React, { ComponentType, useEffect } from 'react'
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
  useLocation
} from 'react-router-dom'
import { useAuth } from 'hooks'

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean
  component: ComponentType
  title?: string
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  title,
  ...rest
}) => {
  const { user } = useAuth()
  const { pathname } = useLocation()

  useEffect(() => {
    if (title && rest.path === pathname) {
      document.title = title
    }
  }, [pathname, rest.path, title])

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: isPrivate ? { from: location } : null
            }}
          />
        )
      }}
    />
  )
}

export default Route
