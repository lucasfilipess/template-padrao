import React from 'react'
import { Errors } from 'components/templates'
import notAuthorized from 'assets/svg/notAuthorized.svg'

const NotAuthorized: React.FC = () => {
  return (
    <Errors
      title="Acesso não autorizado"
      description="Você não está autorizado a acessar esta página."
      src={notAuthorized}
      alt="Ícone de sem autorização"
    />
  )
}

export default NotAuthorized
