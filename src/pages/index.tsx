import loadable from '@loadable/component'
import { Spinner } from 'components/atoms'

export const Dashboard = loadable(() => import('./Dashboard'), {
  fallback: <Spinner />
})

export const NotAuthorized = loadable(() => import('./NotAuthorized'), {
  fallback: <Spinner />
})

export const NotFound = loadable(() => import('./NotFound'), {
  fallback: <Spinner />
})

export const NotConnection = loadable(() => import('./NotConnection'), {
  fallback: <Spinner />
})

export const InternalServerError = loadable(
  () => import('./InternalServerError'),
  {
    fallback: <Spinner />
  }
)

export const Login = loadable(() => import('./Login'), {
  fallback: <Spinner />
})

export const Components = loadable(() => import('./Components'), {
  fallback: <Spinner />
})

export const General = loadable(() => import('./General'), {
  fallback: <Spinner />
})

export const Forms = loadable(() => import('./Forms'), {
  fallback: <Spinner />
})

export const Tables = loadable(() => import('./Tables'), {
  fallback: <Spinner />
})

export const Register = loadable(() => import('./Register'), {
  fallback: <Spinner />
})
