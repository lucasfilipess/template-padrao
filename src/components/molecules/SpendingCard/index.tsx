import React from 'react'
import { Card } from 'react-bootstrap'
import styles from './styles.module.css'

export type SpendingCardProps = {
  id: number
  title: string
  subtitle: string
}

const SpendingCard: React.FC<SpendingCardProps> = ({ title, subtitle, id }) => {
  return (
    <Card className={styles.cardContainer}>
      <Card.Body className={styles.cardBody}>
        <span className={styles.numberFill}>{id}</span>
        <div className={styles.textContainer}>
          <h6 className={styles.title}>{title}</h6>
          <span className={styles.subtitle}>{subtitle}</span>
        </div>
      </Card.Body>
    </Card>
  )
}

export default SpendingCard
