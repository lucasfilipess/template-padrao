import React from 'react'
import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import { Form, Card } from 'react-bootstrap'
import { Button, Checkbox, Input } from 'components/atoms'
import { RegisterCredentials } from 'context'
import styles from './styles.module.css'

export type RegisterCardProps = {
  initialValues: RegisterCredentials
  onSubmit: (values: RegisterCredentials) => Promise<void>
  validationSchema: unknown
}

const RegisterCard: React.FC<RegisterCardProps> = ({
  initialValues,
  onSubmit,
  validationSchema
}) => {
  return (
    <Card className={styles.cardContainer}>
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.title}>Cadastro</Card.Title>
        <Card.Subtitle className={styles.subtitle}>
          Crie uma nova conta
        </Card.Subtitle>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, handleSubmit, handleChange, touched, values }) => (
            <Form noValidate onSubmit={handleSubmit} className={styles.form}>
              <Input
                id="name"
                feedback={errors.name}
                isInvalid={touched.name && !!errors.name}
                label="Nome"
                name="name"
                onChange={handleChange}
                placeholder="Insira seu nome completo"
                type="text"
                value={values.name}
                required
              />
              <Input
                id="email"
                feedback={errors.email}
                isInvalid={touched.email && !!errors.email}
                label="E-mail"
                name="email"
                onChange={handleChange}
                placeholder="Inserir e-mail"
                type="text"
                value={values.email}
                required
              />
              <Input
                id="password"
                feedback={errors.password}
                isInvalid={touched.password && !!errors.password}
                label="Senha"
                name="password"
                onChange={handleChange}
                placeholder="Digite a senha"
                type="password"
                value={values.password}
                required
              />
              <div className={styles.optionsContainer}>
                <Checkbox
                  feedback={errors.terms}
                  isInvalid={touched.terms && !!errors.terms}
                  label={
                    <label className={styles.label}>
                      Ao criar a conta, afirmo que concordo com os{' '}
                      <Link to="/">Termos de Privacidade</Link> e os{' '}
                      <Link to="/">Termos de serviço</Link>.
                    </label>
                  }
                  name="terms"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.buttonsContainer}>
                <Button disabled={!values.terms} type="submit">
                  Criar conta
                </Button>
                <p>
                  Já possui conta? <Link to="/">Faça login</Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  )
}

export default RegisterCard
