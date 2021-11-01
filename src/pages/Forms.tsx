import React from 'react'
import * as yup from 'yup'
import { Forms as TemplateForms } from 'components/templates'
import { FormsValue } from 'components/organisms'
import { useToast } from 'hooks'

const validationSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório.'),
  address: yup.string().required('O endereço é obrigatório.'),
  number: yup.number().required('O número é obrigatório.'),
  fatherName: yup.string().required('O nome do pai é obrigatório.'),
  motherName: yup.string().required('O nome da mãe é obrigatório.'),
  activity: yup.string().required('A atividade é obrigatória.'),
  seniority: yup.string().required('A senioridade é obrigatório.'),
  cpfcnpj: yup.string().required('O cpf/cnpj é obrigatório.'),
  password: yup.string().required('A senha é obrigatória.')
})

const Form: React.FC = () => {
  const { createToast } = useToast()
  const onSubmit = async () => {
    createToast({ message: 'Cadastro efetuado com sucesso!', type: 'success' })
  }

  const initialValues: FormsValue = {
    name: 'João Silva',
    address: 'Rua do espinheiro',
    number: 100,
    fatherName: 'Joaquim Silva',
    motherName: 'Maria Silva',
    activity: 'Desenvolvedor',
    seniority: 'Pleno',
    cpfcnpj: '00000000000',
    password: '12345678',
    autocomplete: ''
  }

  return (
    <TemplateForms
      title="Formulários"
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    />
  )
}

export default Form
