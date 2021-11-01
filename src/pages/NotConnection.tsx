import React from 'react'
import { Errors } from 'components/templates'
import notConnection from 'assets/svg/notConnection.svg'

const NotConnection: React.FC = () => {
  return (
    <Errors
      title="Sem conexão com a internet"
      description="Houve um erro com a conexão de internet."
      src={notConnection}
      alt="Ícone de sem conexão"
    />
  )
}

export default NotConnection
