import React from 'react'
import classNames from 'classnames'
import { Formik } from 'formik'
import { Form, Card, Container, Row, Col } from 'react-bootstrap'
import { useTheme } from 'hooks'
import { Button, Input, Select, OptionsProps } from 'components/atoms'
import styles from './styles.module.scss'

export type FormsValue = {
  name: string
  address: string
  number: number
  fatherName: string
  motherName: string
  activity: string
  seniority: string
  cpfcnpj: string
  password: string
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
  const { isDark } = useTheme()
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
    <Card className={classNames(styles.card, { [styles.cardDark]: isDark })}>
      <Card.Body className={styles.cardBody}>
        <Card.Title
          className={classNames(styles.title, { [styles.titleDark]: isDark })}
        >
          Cadastro de funcionário
        </Card.Title>
        <Card.Subtitle
          className={classNames(styles.subtitle, {
            [styles.subtitleDark]: isDark
          })}
        >
          Cadastro individual de funcionário - texto alternativo/explicativo
        </Card.Subtitle>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, handleSubmit, handleChange, touched, values }) => (
            <Form noValidate onSubmit={handleSubmit} className={styles.form}>
              <Container className={styles.container}>
                <Row className={styles.row}>
                  <Col xs={12} md={5}>
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
                  <Col xs={12} md={6}>
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
                  <Col xs={12} md={6}>
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
                  <Col xs={12} md={3}>
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
                  <Col xs={12} md={3}>
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
                  <Col xs={12} md={3}>
                    <Input
                      feedback={errors.cpfcnpj}
                      isInvalid={touched.cpfcnpj && !!errors.cpfcnpj}
                      label="CPF/CNPJ"
                      name="cpfcnpj"
                      onChange={handleChange}
                      maskType="cpfcnpj"
                      value={values.cpfcnpj}
                      info="cpf ou cnpj"
                      required
                    />
                  </Col>
                  <Col xs={12} md={3}>
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
                <div className={styles.button}>
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
