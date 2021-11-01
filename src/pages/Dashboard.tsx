import React from 'react'
import { Dashboard as DashboardTemplate } from 'components/templates'
import {
  StatusCardProps,
  ChartCardProps,
  SpendingCardProps
} from 'components/molecules'
import { BsCashCoin, BsBasket2Fill, BsGraphUp, BsWallet2 } from 'react-icons/bs'

const Dashboard: React.FC = () => {
  const statusCards: StatusCardProps[] = [
    {
      title: 'Gastos fixos',
      subtitle: '55 registros no mês',
      icon: BsCashCoin,
      iconBackground: '#5E99F5'
    },
    {
      title: 'Gastos variados',
      subtitle: '50 registros no mês',
      icon: BsBasket2Fill,
      iconBackground: '#3F64E8'
    },
    {
      title: 'Receitas',
      subtitle: '86 registros no mês',
      icon: BsGraphUp,
      iconBackground: '#753FE8'
    },
    {
      title: 'Depósitos',
      subtitle: '40 registros no mês',
      icon: BsWallet2,
      iconBackground: '#2EBFED'
    }
  ]
  const chartCards: ChartCardProps[] = [
    {
      title: 'Gastos fixos',
      description: '55 registros no mês de Outubro Totalizando R$ 150.000,00',
      icon: BsCashCoin,
      iconBackground: '#5E99F5',
      chart: [
        { angle: 55, color: '#5E99F5' },
        { angle: 45, color: '#CFCFCF' }
      ],
      total: 55
    },
    {
      title: 'Receitas',
      description: '86 registros no mês de Outubro Totalizando R$ 350.000,00',
      icon: BsGraphUp,
      iconBackground: '#753FE8',
      chart: [
        { angle: 85, color: '#753FE8' },
        { angle: 15, color: '#CFCFCF' }
      ],
      total: 85
    }
  ]

  const spendingCards: SpendingCardProps[] = [
    {
      id: 1,
      title: 'Pessoas',
      subtitle: 'Pagamentos, benefícios, etc'
    },
    {
      id: 2,
      title: 'Materiais',
      subtitle: 'Materiais de limpeza, itens de escritório em geral'
    },
    {
      id: 3,
      title: 'Investimentos',
      subtitle: 'Investimento de capital'
    }
  ]

  return (
    <DashboardTemplate
      statusCards={statusCards}
      chartCards={chartCards}
      spendingCards={spendingCards}
    />
  )
}

export default Dashboard
