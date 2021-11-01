import React, { ElementType } from 'react'
import { Card } from 'components/atoms'
import { RadialChart } from 'react-vis'
import classNames from 'classnames'
import { useTheme } from 'hooks'
import styles from './styles.module.scss'

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
  const { isDark } = useTheme()
  return (
    <Card>
      <Card.Body className={styles.cardBody}>
        <div>
          <div className={styles.wrapper}>
            <span
              className={styles.iconFill}
              style={{ backgroundColor: iconBackground }}
            >
              <Icon />
            </span>
            <div className={styles.container}>
              <h6
                className={classNames(styles.title, {
                  [styles.textDark]: isDark
                })}
              >
                {title}
              </h6>
            </div>
          </div>
          <p
            className={classNames(styles.description, {
              [styles.textDark]: isDark
            })}
          >
            {description}
          </p>
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
          <span
            className={classNames(styles.total, { [styles.textDark]: isDark })}
          >
            {total} registros
          </span>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ChartCard
