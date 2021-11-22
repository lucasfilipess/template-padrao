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

export const Forms = loadable(() => import('./Forms'), {
  fallback: <Spinner />
})

export const Tables = loadable(() => import('./Tables'), {
  fallback: <Spinner />
})

export const Register = loadable(() => import('./Register'), {
  fallback: <Spinner />
})

export const Alerts = loadable(() => import('./Alerts'), {
  fallback: <Spinner />
})

export const CheckboxRadio = loadable(() => import('./CheckboxRadio'), {
  fallback: <Spinner />
})

export const Buttons = loadable(() => import('./Buttons'), {
  fallback: <Spinner />
})

export const Cards = loadable(() => import('./Cards'), {
  fallback: <Spinner />
})

export const Dropdowns = loadable(() => import('./Dropdowns'), {
  fallback: <Spinner />
})

export const Lightbox = loadable(() => import('./Lightbox'), {
  fallback: <Spinner />
})

export const Modal = loadable(() => import('./Modal'), {
  fallback: <Spinner />
})

export const TabsAccordions = loadable(() => import('./TabsAccordions'), {
  fallback: <Spinner />
})

export const Icons = loadable(() => import('./Icons'), {
  fallback: <Spinner />
})

export const Axios = loadable(() => import('./Axios'), {
  fallback: <Spinner />
})
