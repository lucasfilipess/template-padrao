import React from 'react'
import {
  StatusCard,
  StatusCardProps,
  ChartCard,
  ChartCardProps,
  SpendingCard,
  SpendingCardProps
} from 'components/molecules'
import { Button, Subtitle } from 'components/atoms'
import { BsArrowRight } from 'react-icons/bs'
import styles from './styles.module.css'

export type DashboardProps = {
  statusCards: StatusCardProps[]
  chartCards: ChartCardProps[]
  spendingCards: SpendingCardProps[]
}

const Dashboard: React.FC<DashboardProps> = ({
  statusCards,
  chartCards,
  spendingCards
}) => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.statusCards}>
        {statusCards.map(({ title, subtitle, icon, iconBackground }, index) => (
          <StatusCard
            key={`status-card-${index}`}
            title={title}
            subtitle={subtitle}
            icon={icon}
            iconBackground={iconBackground}
          />
        ))}
      </div>
      <Subtitle>Detalhes em gráficos</Subtitle>
      <div className={styles.chartCards}>
        {chartCards.map(
          (
            { title, description, icon, iconBackground, chart, total },
            index
          ) => (
            <ChartCard
              key={`chart-card-${index}`}
              title={title}
              description={description}
              icon={icon}
              iconBackground={iconBackground}
              chart={chart}
              total={total}
            />
          )
        )}
      </div>
      <div className={styles.subtitleContainer}>
        <Subtitle>Gastos por tipo</Subtitle>
        <Button variant="link">
          ver mais <BsArrowRight />
        </Button>
      </div>
      <div className={styles.spendingCards}>
        {spendingCards.map(({ id, title, subtitle }) => (
          <SpendingCard
            key={`chart-card-${id}`}
            id={id}
            title={title}
            subtitle={subtitle}
          />
        ))}
      </div>
    </div>
  )
}

export default Dashboard
