import React from 'react'
import { LoginCard, LoginCardProps } from 'components/organisms'
import { useTheme } from 'hooks'
import rumoSolucoes from 'assets/images/rumoSolucoes.png'
import rumoSolucoesDark from 'assets/images/rumoSolucoesDark.png'
import styles from './styles.module.css'

export type LoginProps = LoginCardProps & {
  backgroundImage: string
}

const Login: React.FC<LoginProps> = ({
  backgroundImage,
  initialValues,
  onSubmit,
  validationSchema
}) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <div className={styles.loginContainer}>
      <div
        className={styles.imageBackground}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className={styles.logoContainer}>
        <img
          className={styles.logo}
          src={isDark ? rumoSolucoesDark : rumoSolucoes}
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
