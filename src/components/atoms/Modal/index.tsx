import React, { ReactNode } from 'react'
import {
  Modal as BootstrapModal,
  Button,
  ModalProps as BootstrapModalProps
} from 'react-bootstrap'
import styles from './styles.module.css'

export type ModalProps = BootstrapModalProps & {
  title?: string
  body?: string | ReactNode
  primaryButtonLabel?: string
  secondaryButtonLabel?: string
  onClickPrimaryButton?: (arg?: unknown) => unknown
  onClickSecondaryButton?: (arg?: unknown) => unknown
}

const Modal: React.FC<ModalProps> = ({
  title,
  body,
  primaryButtonLabel,
  secondaryButtonLabel,
  onClickPrimaryButton,
  onClickSecondaryButton,
  ...rest
}) => {
  return (
    <BootstrapModal className={styles.modal} {...rest}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>{body}</BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={onClickSecondaryButton}>
          {secondaryButtonLabel}
        </Button>
        <Button variant="primary" onClick={onClickPrimaryButton}>
          {primaryButtonLabel}
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  )
}

export default Modal
