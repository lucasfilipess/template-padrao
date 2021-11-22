import React from 'react'
import { Card, Button, Table, Alert } from 'react-bootstrap'
import { Api, ResponseProps } from 'services'
import { CodeBlock } from 'components/atoms'
import { codeExample } from './codeExample'
import { useToast } from 'hooks'
import styles from './styles.module.css'

const Axios: React.FC = () => {
  const { createToast } = useToast()

  const handleRequest = async () => {
    const { data }: ResponseProps = await Api.get('/api')
    createToast({ type: 'success', message: data })
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Axios</Card.Title>
        <Card.Subtitle>
          As validações de erros de requisições via axios são baseadas nos
          Status code abaixo.
        </Card.Subtitle>
        <Table bordered variant="dark">
          <thead>
            <tr>
              <th>Status</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>403</td>
              <td>Você não está autorizado a acessar este recurso.</td>
            </tr>
            <tr>
              <td>404</td>
              <td>O recurso solicitado está faltando.</td>
            </tr>
            <tr>
              <td>407</td>
              <td>Erro de Proxy Local.</td>
            </tr>
            <tr>
              <td>408</td>
              <td>Timeout ocorrido.</td>
            </tr>
            <tr>
              <td>500</td>
              <td>Internal Server Error.</td>
            </tr>
          </tbody>
        </Table>
        <Alert variant="danger">
          No erro 500 o desenvolvedor tem total controle na mensagem gerada,
          basta na exceção disparada pela aplicação colocar uma mensagem mais
          amigável para o usuário
        </Alert>
        <div className={styles.buttonContainer}>
          <Button onClick={handleRequest} variant="danger">
            Click error
          </Button>
        </div>
        <CodeBlock code={codeExample} />
      </Card.Body>
    </Card>
  )
}

export default Axios
