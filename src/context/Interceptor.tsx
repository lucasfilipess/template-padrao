import React from 'react'
import { Api } from 'services'
import { useToast } from 'hooks'

const InterceptorProvider: React.FC = ({ children }) => {
  const { createToast } = useToast()

  Api.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
  )

  Api.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log({ error })

      if (error.response) {
        const { status } = error.response
        if (status === 403)
          createToast({
            type: 'error',
            message: 'Você não está autorizado a acessar este recurso'
          })
        else if (status === 404)
          createToast({
            type: 'error',
            message: 'O recurso solicitado está faltando'
          })
        else if (status === 407)
          createToast({ type: 'error', message: 'Erro de Proxy Local' })
        else if (status === 408)
          createToast({ type: 'error', message: 'Timeout ocorrido' })
        else if (status === 500)
          createToast({ type: 'error', message: 'Erro interno no servidor' })
      } else
        createToast({ type: 'error', message: 'Ocorreu um erro inesperado' })

      return Promise.reject(error)
    }
  )
  return <>{children}</>
}

export default InterceptorProvider
