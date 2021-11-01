import React from 'react'
import * as yup from 'yup'
import { useAuth, useToast } from 'hooks'
import { LoginCredentials } from 'context'
import backgroundImage from 'assets/images/login.png'
import { Login as LoginTemplate } from 'components/templates'

const validationSchema = yup.object().shape({
  email: yup.string().email().required('O nome de usuário é obrigatório.'),
  password: yup.string().required('A senha é obrigatória.'),
  rememberMe: yup.boolean()
})

const Login: React.FC = () => {
  const { login } = useAuth()
  const { createToast } = useToast()
  const initialValues: LoginCredentials = {
    email: 'admin@teste.com',
    password: '12345678',
    rememberMe: false
  }

  const onSubmit = async (values: LoginCredentials) => {
    const status = await login(values)
    if (status === 200)
      createToast({ message: 'Login efetuado com sucesso!', type: 'success' })
  }

  return (
    <LoginTemplate
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      backgroundImage={backgroundImage}
    />
  )
}

export default Login
