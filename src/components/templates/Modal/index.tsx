import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Modal as DefaultModal, CodeBlock } from 'components/atoms'
import { codeExample } from './codeExample'
import styles from './styles.module.css'

const Modal: React.FC = () => {
  const [show, setShow] = useState(false)

  const handleCloseModal = () => {
    setShow(false)
  }

  const handleOpenModal = () => {
    setShow(true)
  }

  const body = (
    <p>
      <h2>Overflowing text to show scroll behavior</h2>
      <br />
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
      ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
      ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
      nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum
      faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur.
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec
      sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras
      mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
      facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
      vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
      consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
      dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent
      commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
      dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
      consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
      facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
      vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
      consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
      dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent
      commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
      dui. Donec ullamcorper nulla non metus auctor fringilla.
    </p>
  )

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Modal</Card.Title>
          <Card.Subtitle>
            No design da interface do usuário para aplicativos de computador,
            uma janela modal é um elemento de controle gráfico subordinado à
            janela principal de um aplicativo. Ele cria um modo que desativa a
            janela principal, mas a mantém visível, com a janela modal como uma
            janela filho à sua frente.
          </Card.Subtitle>
          <div className={styles.buttonsContainer}>
            <Button onClick={handleOpenModal} variant="primary">
              Abrir modal
            </Button>
          </div>
          <CodeBlock code={codeExample} />
        </Card.Body>
      </Card>
      <DefaultModal
        centered={true}
        onClickPrimaryButton={handleCloseModal}
        onClickSecondaryButton={handleCloseModal}
        onHide={handleCloseModal}
        primaryButtonLabel="Salvar"
        secondaryButtonLabel="Fechar"
        size="lg"
        title="Modal Heading"
        body={body}
        show={show}
      />
    </>
  )
}

export default Modal
