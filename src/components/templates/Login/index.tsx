import React from 'react'
import classNames from 'classnames'
import { useTheme } from 'hooks'
import { LoginCard, LoginCardProps } from 'components/organisms'
import rumoSolucoes from 'assets/images/rumoSolucoes.png'
import styles from './styles.module.scss'

export type LoginProps = LoginCardProps & {
  backgroundImage: string
}

const Login: React.FC<LoginProps> = ({
  backgroundImage,
  initialValues,
  onSubmit,
  validationSchema
}) => {
  const { isDark } = useTheme()
  return (
    <div
      className={classNames(styles.container, {
        [styles.containerDark]: isDark
      })}
    >
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className={styles.logoWrapper}>
        <img
          className={styles.logo}
          src={rumoSolucoes}
          alt="Logo Rumo Soluções"
        />
      </div>
      <LoginCard
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      />
    </div>
  )
}

export default Login
