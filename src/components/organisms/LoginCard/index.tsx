import React from 'react'
import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { useTheme } from 'hooks'
import { Form, Card } from 'react-bootstrap'
import { Button, Checkbox, Input } from 'components/atoms'
import { LoginCredentials } from 'context'
import styles from './styles.module.scss'

export type LoginCardProps = {
  initialValues: LoginCredentials
  onSubmit: (values: LoginCredentials) => Promise<void>
  validationSchema: unknown
}

const LoginCard: React.FC<LoginCardProps> = ({
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
          Login
        </Card.Title>
        <Card.Subtitle
          className={classNames(styles.subtitle, { [styles.textDark]: isDark })}
        >
          Faça login na sua conta
        </Card.Subtitle>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, handleSubmit, handleChange, touched, values }) => (
            <Form noValidate onSubmit={handleSubmit} className={styles.form}>
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
                <Link to="/">Esqueci a senha</Link>
                <Checkbox
                  feedback={errors.rememberMe}
                  isInvalid={touched.rememberMe && !!errors.rememberMe}
                  label="Lembrar usuário"
                  name="rememberMe"
                  onChange={handleChange}
                  required
                />
              </div>
              <div
                className={classNames(styles.buttons, {
                  [styles.textDark]: isDark
                })}
              >
                <Button type="submit">Continuar</Button>
                <p>
                  Não possui conta? <Link to="/cadastro">Cadastre-se</Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  )
}

export default LoginCard
