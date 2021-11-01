import React from 'react'
import { Errors } from 'components/templates'
import notFound from 'assets/svg/notFound.svg'

const NotFound: React.FC = () => {
  return (
    <Errors
      title="Erro 404"
      description="Página não encontrada."
      src={notFound}
      alt="Ícone de página não encontrada"
    />
  )
}

export default NotFound
