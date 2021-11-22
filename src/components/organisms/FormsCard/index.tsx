import React from 'react'
import { Formik } from 'formik'
import { Button, Form, Card, Container, Row, Col } from 'react-bootstrap'
import { Input, Select, OptionsProps, Textarea } from 'components/atoms'
import styles from './styles.module.css'

export type FormsValue = {
  name: string
  address: string
  email: string
  cep: string
  date: string
  hour: string
  number: number
  fatherName: string
  motherName: string
  phone: string
  activity: string
  seniority: string
  cpfcnpj: string
  money: string
  password: string
  description: string
  autocomplete: string
}

export type FormsCardProps = {
  initialValues: FormsValue
  onSubmit: (values: FormsValue) => Promise<void>
  validationSchema: unknown
}

const FormsCard: React.FC<FormsCardProps> = ({
  initialValues,
  onSubmit,
  validationSchema
}) => {
  const options: OptionsProps = [
    {
      value: 'Júnior',
      label: 'Júnior'
    },
    {
      value: 'Pleno',
      label: 'Pleno'
    },
    {
      value: 'Sênior',
      label: 'Sênior'
    }
  ]

  return (
    <Card>
      <Card.Body>
        <Card.Title className={styles.title}>
          Cadastro de funcionário
        </Card.Title>
        <Card.Subtitle className={styles.subtitle}>
          Cadastro individual de funcionário - texto alternativo/explicativo
        </Card.Subtitle>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, handleSubmit, handleChange, touched, values }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Container className={styles.container}>
                <Row className={styles.row}>
                  <Col xs={12} md={4}>
                    <Input
                      feedback={errors.name}
                      isInvalid={touched.name && !!errors.name}
                      label="Nome completo"
                      name="name"
                      onChange={handleChange}
                      type="text"
                      value={values.name}
                      required
                    />
                  </Col>
                  <Col xs={12} md={4}>
                    <Input
                      feedback={errors.cpfcnpj}
                      isInvalid={touched.cpfcnpj && !!errors.cpfcnpj}
                      label="CPF/CNPJ"
                      maskType="cpfcnpj"
                      name="cpfcnpj"
                      info="Seu CPF ou CNPJ"
                      onChange={handleChange}
                      type="text"
                      value={values.cpfcnpj}
                      required
                    />
                  </Col>
                  <Col xs={12} md={4}>
                    <Input
                      feedback={errors.phone}
                      isInvalid={touched.phone && !!errors.phone}
                      label="Telefone"
                      maskType="phone"
                      name="phone"
                      onChange={handleChange}
                      type="phone"
                      value={values.phone}
                      required
                    />
                  </Col>
                </Row>
                <Row className={styles.row}>
                  <Col xs={12} md={4}>
                    <Input
                      feedback={errors.email}
                      isInvalid={touched.email && !!errors.email}
                      label="Email"
                      name="email"
                      onChange={handleChange}
                      type="email"
                      value={values.email}
                      required
                    />
                  </Col>
                  <Col xs={12} md={4}>
                    <Input
                      feedback={errors.motherName}
                      isInvalid={touched.motherName && !!errors.motherName}
                      label="Nome completo da mãe"
                      name="motherName"
                      onChange={handleChange}
                      type="text"
                      value={values.motherName}
                      required
                    />
                  </Col>
                  <Col xs={12} md={4}>
                    <Input
                      feedback={errors.fatherName}
                      isInvalid={touched.fatherName && !!errors.fatherName}
                      label="Nome completo do pai"
                      name="fatherName"
                      onChange={handleChange}
                      type="text"
                      value={values.fatherName}
                      required
                    />
                  </Col>
                </Row>
                <Row className={styles.row}>
                  <Col xs={12} md={5}>
                    <Input
                      feedback={errors.address}
                      isInvalid={touched.address && !!errors.address}
                      label="Endereço completo"
                      name="address"
                      onChange={handleChange}
                      type="text"
                      value={values.address}
                      required
                    />
                  </Col>
                  <Col xs={12} md={5}>
                    <Input
                      feedback={errors.cep}
                      isInvalid={touched.cep && !!errors.cep}
                      label="CEP"
                      name="cep"
                      maskType="cep"
                      info="CEP do seu endereço"
                      onChange={handleChange}
                      type="text"
                      value={values.cep}
                      required
                    />
                  </Col>
                  <Col xs={12} md={2}>
                    <Input
                      feedback={errors.number}
                      isInvalid={touched.number && !!errors.number}
                      label="Número"
                      name="number"
                      onChange={handleChange}
                      type="number"
                      value={values.number}
                      required
                    />
                  </Col>
                </Row>
                <Row className={styles.row}>
                  <Col xs={12} md={4}>
                    <Input
                      feedback={errors.activity}
                      isInvalid={touched.activity && !!errors.activity}
                      label="Atividade a desempenhar"
                      name="activity"
                      onChange={handleChange}
                      type="text"
                      value={values.activity}
                      required
                    />
                  </Col>
                  <Col xs={12} md={4}>
                    <Select
                      defaultValue={values.seniority}
                      feedback={errors.seniority}
                      isInvalid={touched.seniority && !!errors.seniority}
                      label="Senioridade"
                      name="seniority"
                      onChange={handleChange}
                      options={options}
                      required
                    />
                  </Col>
                  <Col xs={12} md={4}>
                    <Input
                      feedback={errors.money}
                      isInvalid={touched.money && !!errors.money}
                      label="Pretensão salarial (R$)"
                      name="money"
                      maskType="money"
                      onChange={handleChange}
                      type="text"
                      value={values.money}
                      required
                    />
                  </Col>
                </Row>
                <Row className={styles.row}>
                  <Col xs={12} md={4}>
                    <Input
                      feedback={errors.date}
                      isInvalid={touched.date && !!errors.date}
                      label="Data"
                      name="date"
                      onChange={handleChange}
                      type="date"
                      value={values.date}
                      required
                    />
                  </Col>
                  <Col xs={12} md={4}>
                    <Input
                      feedback={errors.hour}
                      isInvalid={touched.hour && !!errors.hour}
                      label="Horário"
                      name="hour"
                      onChange={handleChange}
                      type="time"
                      value={values.hour}
                      required
                    />
                  </Col>
                  <Col xs={12} md={4}>
                    <Input
                      feedback={errors.password}
                      isInvalid={touched.password && !!errors.password}
                      label="Senha"
                      name="password"
                      onChange={handleChange}
                      type="password"
                      value={values.password}
                      required
                    />
                  </Col>
                </Row>
                <Row className={styles.row}>
                  <Col xs={12}>
                    <Textarea
                      feedback={errors.description}
                      isInvalid={touched.description && !!errors.description}
                      label="Descrição"
                      name="description"
                      onChange={handleChange}
                      type="description"
                      value={values.description}
                      required
                    />
                  </Col>
                </Row>
                <div className={styles.buttonContainer}>
                  <Button type="submit">Salvar</Button>
                </div>
              </Container>
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  )
}

export default FormsCard
