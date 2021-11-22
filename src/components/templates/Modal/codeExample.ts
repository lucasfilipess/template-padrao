export const codeExample = `
    import { useState } from 'react'
    import { Modal } from 'components/atoms'

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
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
          ac facilisis in, egestas eget quam. 
      </p>
    )

    <Modal
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


`
