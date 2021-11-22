import React, { ElementType } from 'react'
import { Button } from 'components/atoms'
import { Card } from 'react-bootstrap'
import { BsXCircleFill } from 'react-icons/bs'
import styles from './styles.module.css'

export type ThemedCardProps = {
  closeButton?: boolean
  onClickCloseButton?: (arg?: unknown) => unknown
  icon?: ElementType
  title?: string
  text?: string
  button?: boolean
  buttonLabel?: string
  onClickButton?: (arg?: unknown) => unknown
  src?: string
  cover?: boolean
  reverse?: boolean
}

const ThemedCard: React.FC<ThemedCardProps> = ({
  closeButton,
  onClickCloseButton,
  icon: Icon,
  title,
  text,
  button,
  buttonLabel,
  onClickButton,
  src,
  cover,
  reverse
}) => {
  return (
    <Card>
      {closeButton && (
        <div className={styles.closeButtonWrapper}>
          <BsXCircleFill onClick={onClickCloseButton} />
        </div>
      )}
      {!reverse && cover && src && <Card.Img variant="top" src={src} />}
      <Card.Body>
        {Icon && (
          <div className={styles.iconWrapper}>
            <Icon />
          </div>
        )}
        {!reverse && !cover && src && (
          <Card.Img className={styles.image} variant="top" src={src} />
        )}
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        {reverse && !cover && src && (
          <Card.Img className={styles.image} variant="top" src={src} />
        )}
        {button && (
          <div className={styles.btnWrapper}>
            <Button onClick={onClickButton}>{buttonLabel}</Button>
          </div>
        )}
      </Card.Body>
      {reverse && cover && src && <Card.Img variant="bottom" src={src} />}
    </Card>
  )
}

export default ThemedCard
