import React from 'react'
import { api } from 'services'

const InterceptorProvider: React.FC = ({ children }) => {
  const errorsStatus = [400, 403, 404, 407, 408, 500]

  api.interceptors.request.use((response) => {
    return response
  })

  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response) {
        const status = errorsStatus.find(
          (errorStatus) => errorStatus === error.response.status
        )
        if (status) {
          console.log({ status, error })
        }
      }
      return Promise.reject(error)
    }
  )
  return <>{children}</>
}

export default InterceptorProvider
