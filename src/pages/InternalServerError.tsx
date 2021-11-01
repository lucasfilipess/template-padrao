import React from 'react'
import { Errors } from 'components/templates'
import internalServerError from 'assets/svg/internalServerError.svg'

const InternalServerError: React.FC = () => {
  return (
    <Errors
      title="Erro 500"
      description="Erro interno do servidor."
      src={internalServerError}
      alt="Ícone de erro interno no servidor"
    />
  )
}

export default InternalServerError
