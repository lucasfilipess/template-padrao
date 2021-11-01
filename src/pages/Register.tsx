import React from 'react'
import * as yup from 'yup'
import { useAuth, useToast } from 'hooks'
import { RegisterCredentials } from 'context'
import backgroundImage from 'assets/images/register.png'
import { Register as RegisterTemplate } from 'components/templates'

const validationSchema = yup.object().shape({
  email: yup.string().email().required('O nome de usuário é obrigatório.'),
  password: yup.string().required('A senha é obrigatória.'),
  rememberMe: yup.boolean()
})

const Register: React.FC = () => {
  const { register } = useAuth()
  const { createToast } = useToast()
  const initialValues: RegisterCredentials = {
    name: 'admin',
    email: 'admin@teste.com',
    password: '12345678',
    terms: false
  }

  const onSubmit = async (values: RegisterCredentials) => {
    const status = await register(values)
    if (status === 200)
      createToast({
        message: 'Cadastro efetuado com sucesso!',
        type: 'success'
      })
  }

  return (
    <RegisterTemplate
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      backgroundImage={backgroundImage}
    />
  )
}

export default Register
