import React from 'react'
import {
  DataGrid,
  GridRowData,
  ptBR,
  DataGridProps,
  GridColumns,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport
} from '@mui/x-data-grid'
import styles from './styles.module.css'

export type ColumnsProps = GridColumns

export type RowsProps = GridRowData[]

export type TableProps = DataGridProps

const Table: React.FC<DataGridProps> = ({ rows, columns, ...rest }) => {
  const styledColumns: GridColumns = columns.map((column) => ({
    headerClassName: styles.cell,
    cellClassName: styles.cell,
    ...column
  }))

  const CustomToolbar = () => (
    <GridToolbarContainer className={styles.gridToolbarContainer}>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  )

  return (
    <div className={styles.tableContainer}>
      <DataGrid
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        localeText={ptBR.props.MuiDataGrid.localeText}
        rows={rows}
        columns={styledColumns}
        className={styles.dataGrid}
        components={{
          Toolbar: CustomToolbar
        }}
        {...rest}
      />
    </div>
  )
}

export default Table
