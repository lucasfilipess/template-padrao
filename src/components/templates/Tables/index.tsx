import React from 'react'
import { Table, TableProps, Title } from 'components/atoms'
import styles from './styles.module.scss'

export type TablesProps = TableProps

const Tables: React.FC<TablesProps> = ({ ...rest }) => {
  return (
    <div className={styles.container}>
      <Title>Tabela</Title>
      <Table {...rest} />
    </div>
  )
}

export default Tables
