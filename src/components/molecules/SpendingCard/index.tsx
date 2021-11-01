import React from 'react'
import classNames from 'classnames'
import { Card } from 'components/atoms'
import { useTheme } from 'hooks'
import styles from './styles.module.scss'

export type SpendingCardProps = {
  id: number
  title: string
  subtitle: string
}

const SpendingCard: React.FC<SpendingCardProps> = ({ title, subtitle, id }) => {
  const { isDark } = useTheme()
  return (
    <Card className={classNames(styles.card)}>
      <Card.Body className={styles.cardBody}>
        <span className={styles.numberFill}>{id}</span>
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

export default SpendingCard
