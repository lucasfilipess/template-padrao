import React from 'react'
import {
  DataGrid,
  GridRowData,
  ptBR,
  DataGridProps,
  GridColumns
} from '@mui/x-data-grid'
import className from 'classnames'
import { useTheme } from 'hooks'
import styles from './styles.module.scss'
import classNames from 'classnames'

export type ColumnsProps = GridColumns
export type RowsProps = GridRowData[]

export type TableProps = DataGridProps & {
  title?: string
}

const Table: React.FC<TableProps> = ({ title, rows, columns, ...rest }) => {
  const { isDark } = useTheme()
  const styledColumns: GridColumns = columns.map((column) => ({
    headerClassName: classNames(styles.cell, { [styles.cellDark]: isDark }),
    cellClassName: classNames(styles.cell, { [styles.cellDark]: isDark }),
    ...column
  }))

  return (
    <div
      className={className(styles.container, {
        [styles.containerDark]: isDark
      })}
    >
      {title && <h4>{title}</h4>}
      <DataGrid
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        localeText={ptBR.props.MuiDataGrid.localeText}
        rows={rows}
        columns={styledColumns}
        className={classNames(styles.dataGrid, {
          [styles.dataGridDark]: isDark
        })}
        {...rest}
      />
    </div>
  )
}

export default Table
