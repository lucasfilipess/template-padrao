import React from 'react'
import { ColumnsProps, RowsProps } from 'components/atoms'
import { Tables as TablesTemplate } from 'components/templates'

const Tables: React.FC = () => {
  const columns: ColumnsProps = [
    { field: 'name', headerName: 'Nome', flex: 1 },
    { field: 'company', headerName: 'Empresa', flex: 1 },
    { field: 'email', headerName: 'E-mail', flex: 1 },
    { field: 'phone', headerName: 'Telefone', flex: 1 },
    { field: 'address', headerName: 'Endereço', flex: 1 }
  ]

  const rows: RowsProps = [...Array(50)].map((_, index) =>
    index % 3 === 0
      ? {
          id: index,
          name: 'João Silva',
          company: 'Rumo Soluções',
          email: 'joao@rumo.com.br',
          phone: '3499-9999',
          address: 'Rua do espinheiro'
        }
      : {
          id: index,
          name: 'Maria Silva',
          company: 'Rumo Soluções',
          email: 'maria@rumo.com.br',
          phone: '3499-9999',
          address: 'Rua do espinheiro'
        }
  )

  return (
    <TablesTemplate
      pagination
      rows={rows}
      columns={columns}
      density="compact"
      showColumnRightBorder={false}
      showCellRightBorder={false}
    />
  )
}

export default Tables
