import React from 'react'
import { RegisterCard, RegisterCardProps } from 'components/organisms'
import { useTheme } from 'hooks'
import rumoSolucoes from 'assets/images/rumoSolucoes.png'
import rumoSolucoesDark from 'assets/images/rumoSolucoesDark.png'
import styles from './styles.module.css'

export type RegisterProps = RegisterCardProps & {
  backgroundImage: string
}

const Register: React.FC<RegisterProps> = ({
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
      <RegisterCard
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      />
    </div>
  )
}

export default Register
