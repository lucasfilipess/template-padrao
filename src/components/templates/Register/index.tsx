import React from 'react'
import classNames from 'classnames'
import { useTheme } from 'hooks'
import { RegisterCard, RegisterCardProps } from 'components/organisms'
import rumoSolucoes from 'assets/images/rumoSolucoes.png'
import styles from './styles.module.scss'

export type RegisterProps = RegisterCardProps & {
  backgroundImage: string
}

const Register: React.FC<RegisterProps> = ({
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
      <RegisterCard
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      />
    </div>
  )
}

export default Register
