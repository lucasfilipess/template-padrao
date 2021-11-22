import React, { ElementType } from 'react'
import { Card } from 'react-bootstrap'
import styles from './styles.module.css'

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
  return (
    <Card className={styles.cardContainer}>
      <Card.Body className={styles.cardBody}>
        <span
          className={styles.iconFill}
          style={{ backgroundColor: iconBackground }}
        >
          <Icon />
        </span>
        <div className={styles.textContainer}>
          <h6 className={styles.title}>{title}</h6>
          <span className={styles.subtitle}>{subtitle}</span>
        </div>
      </Card.Body>
    </Card>
  )
}

export default StatusCard
