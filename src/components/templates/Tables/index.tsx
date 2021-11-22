import React from 'react'
import { Table, TableProps } from 'components/atoms'
import styles from './styles.module.css'

export type TablesProps = TableProps

const Tables: React.FC<TablesProps> = ({ ...rest }) => {
  return (
    <div className={styles.tableContainer}>
      <Table {...rest} />
    </div>
  )
}

export default Tables
