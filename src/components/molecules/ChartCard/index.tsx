import React, { ElementType } from 'react'
import { Card } from 'react-bootstrap'
import { RadialChart } from 'react-vis'
import styles from './styles.module.css'

export type ChartProps = {
  angle?: number | undefined
  className?: string | undefined
  label?: string | undefined
  radius?: number | undefined
  style?: React.CSSProperties | undefined
  color?: string
}

export type ChartCardProps = {
  title: string
  description: string
  icon: ElementType
  iconBackground?: string
  chart: ChartProps[]
  total: number
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  description,
  icon: Icon,
  iconBackground,
  chart,
  total
}) => {
  return (
    <Card>
      <Card.Body className={styles.cardBody}>
        <div>
          <div className={styles.textContainer}>
            <span
              className={styles.iconFill}
              style={{ backgroundColor: iconBackground }}
            >
              <Icon />
            </span>
            <div className={styles.titleContainer}>
              <h6 className={styles.title}>{title}</h6>
            </div>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.chart}>
          <RadialChart
            colorType="literal"
            innerRadius={68}
            radius={75}
            data={chart}
            color={(d: { color: string }) => d.color}
            width={200}
            height={200}
            animation="gentle"
          />
          <span className={styles.total}>{total} registros</span>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ChartCard
