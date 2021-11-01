import React, { ElementType } from 'react'
import { Button } from 'components/atoms'
import classNames from 'classnames'
import {
  Card as BootstrapCard,
  CardProps as BootstrapCardProps
} from 'react-bootstrap'
import { BsXCircleFill } from 'react-icons/bs'
import { useTheme } from 'hooks'
import styles from './styles.module.scss'

export type CardProps = BootstrapCardProps

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

const Card: React.FC<CardProps> = ({ children, className, ...rest }) => {
  const { isDark } = useTheme()
  return (
    <BootstrapCard
      className={classNames(className, styles.card, {
        [styles.cardDark]: isDark
      })}
      {...rest}
    >
      {children}
    </BootstrapCard>
  )
}

export const ThemedCard: React.FC<ThemedCardProps> = ({
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
  const { isDark } = useTheme()
  return (
    <Card>
      {closeButton && (
        <div className={styles.closeButtonWrapper}>
          <BsXCircleFill onClick={onClickCloseButton} />
        </div>
      )}
      {!reverse && cover && src && (
        <BootstrapCard.Img variant="top" src={src} />
      )}
      <BootstrapCard.Body>
        {Icon && (
          <div
            className={classNames(styles.iconWrapper, {
              [styles.iconWrapperDark]: isDark
            })}
          >
            <Icon />
          </div>
        )}
        {!reverse && !cover && src && (
          <BootstrapCard.Img className={styles.image} variant="top" src={src} />
        )}
        <BootstrapCard.Title>{title}</BootstrapCard.Title>
        <BootstrapCard.Text>{text}</BootstrapCard.Text>
        {reverse && !cover && src && (
          <BootstrapCard.Img className={styles.image} variant="top" src={src} />
        )}
        {button && (
          <div className={styles.btnWrapper}>
            <Button onClick={onClickButton}>{buttonLabel}</Button>
          </div>
        )}
      </BootstrapCard.Body>
      {reverse && cover && src && (
        <BootstrapCard.Img variant="bottom" src={src} />
      )}
    </Card>
  )
}

export default Object.assign(Card, {
  Img: BootstrapCard.Img,
  Title: BootstrapCard.Title,
  Subtitle: BootstrapCard.Subtitle,
  Body: BootstrapCard.Body,
  Link: BootstrapCard.Link,
  Text: BootstrapCard.Text,
  Header: BootstrapCard.Header,
  Footer: BootstrapCard.Footer,
  ImgOverlay: BootstrapCard.ImgOverlay
})
