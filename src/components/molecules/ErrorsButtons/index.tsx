import React from 'react'
import { Button } from 'components/atoms'
import { useHistory } from 'react-router-dom'
import styles from './styles.module.scss'

export type ErrorsButtonsProps = {
  isMobile?: boolean
}

const ErrorsButtons: React.FC<ErrorsButtonsProps> = ({ isMobile }) => {
  const { goBack, push } = useHistory()

  const handleSupport = () => {
    push('/')
  }

  return (
    <div className={styles.buttonsWrapper}>
      <Button
        onClick={handleSupport}
        variant={isMobile ? 'link' : 'outline-primary'}
      >
        Ajuda do suporte
      </Button>
      <Button onClick={goBack}>Voltar</Button>
    </div>
  )
}

export default ErrorsButtons
