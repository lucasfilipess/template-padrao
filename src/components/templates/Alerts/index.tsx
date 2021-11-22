import React from 'react'
import { CodeBlock } from 'components/atoms'
import { Card, Button } from 'react-bootstrap'
import { useToast } from 'hooks'
import { codeExample } from './codeExample'
import styles from './styles.module.css'

const Alerts: React.FC = () => {
  const { createToast } = useToast()

  const message = (typeMessage: string) =>
    `Olá! Aqui você informa sua mensagem de ${typeMessage} ao usuário.`

  return (
    <Card>
      <Card.Body>
        <Card.Title className={styles.title}>Exemplos</Card.Title>
        <Card.Subtitle className={styles.subtitle}>
          As Notificações serão utilizadas como informativos para as interações
          do usuário com a página através do{' '}
          <a
            href="https://fkhadra.github.io/react-toastify/introduction"
            target="_blank"
            rel="noreferrer"
          >
            react-toastify
          </a>
        </Card.Subtitle>
        <div className={styles.buttonsContainer}>
          <Button
            onClick={() =>
              createToast({ type: 'info', message: message('informação') })
            }
            variant="info"
          >
            Mensagem Informativa
          </Button>
          <Button
            onClick={() =>
              createToast({ type: 'warning', message: message('alerta') })
            }
            variant="warning"
          >
            Mensagem alerta
          </Button>
          <Button
            onClick={() =>
              createToast({ type: 'success', message: message('sucesso') })
            }
            variant="success"
          >
            Mensagem sucesso
          </Button>
          <Button
            onClick={() =>
              createToast({ type: 'error', message: message('erro') })
            }
            variant="danger"
          >
            Mensagem erro
          </Button>
        </div>
        <CodeBlock code={codeExample} />
      </Card.Body>
    </Card>
  )
}

export default Alerts
