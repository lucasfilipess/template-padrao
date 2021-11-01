import React, { ElementType } from 'react'
import classNames from 'classnames'
import { useTheme } from 'hooks'
import { Card } from 'components/atoms'
import styles from './styles.module.scss'

export type StatusCardProps = {
  title: string
  subtitle: string
  icon: ElementType
  iconBackground?: string
}

const StatusCard: React.FC<StatusCardProps> = ({
  title,
  subtitle,
  icon: Icon,
  iconBackground
}) => {
  const { isDark } = useTheme()
  return (
    <Card className={classNames(styles.card, { [styles.cardDark]: isDark })}>
      <Card.Body className={styles.cardBody}>
        <span
          className={styles.iconFill}
          style={{ backgroundColor: iconBackground }}
        >
          <Icon />
        </span>
        <div className={styles.container}>
          <h6
            className={classNames(styles.title, { [styles.titleDark]: isDark })}
          >
            {title}
          </h6>
          <span
            className={classNames(styles.subtitle, {
              [styles.subtitleDark]: isDark
            })}
          >
            {subtitle}
          </span>
        </div>
      </Card.Body>
    </Card>
  )
}

export default StatusCard
