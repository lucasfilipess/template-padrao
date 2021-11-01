import React from 'react'
import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { useTheme } from 'hooks'
import { Form, Card } from 'react-bootstrap'
import { Button, Checkbox, Input } from 'components/atoms'
import { RegisterCredentials } from 'context'
import styles from './styles.module.scss'

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
  const { isDark } = useTheme()
  return (
    <Card className={classNames(styles.card, { [styles.cardDark]: isDark })}>
      <Card.Body className={styles.cardBody}>
        <Card.Title
          className={classNames(styles.title, { [styles.textDark]: isDark })}
        >
          Cadastro
        </Card.Title>
        <Card.Subtitle
          className={classNames(styles.subtitle, { [styles.textDark]: isDark })}
        >
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
              <div className={styles.options}>
                <Checkbox
                  feedback={errors.terms}
                  isInvalid={touched.terms && !!errors.terms}
                  label={
                    <label
                      className={classNames(styles.label, {
                        [styles.textDark]: isDark
                      })}
                    >
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
              <div
                className={classNames(styles.buttons, {
                  [styles.textDark]: isDark
                })}
              >
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
