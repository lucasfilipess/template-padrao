import { ElementType } from 'react'
import {
  BsBarChartLine,
  BsPalette,
  BsTools,
  BsExclamationTriangle
} from 'react-icons/bs'

export type MenuProps = {
  id: number
  title: string
  path?: string
  icon?: ElementType
}

export type MenusProps = MenuProps & {
  subMenus?: MenuProps[]
}

const MENUS: MenusProps[] = [
  {
    id: 0,
    title: 'Dashboard',
    path: '/dashboard',
    icon: BsBarChartLine
  },
  {
    id: 1,
    title: 'UI',
    icon: BsPalette,
    subMenus: [
      {
        id: 0,
        title: 'Components',
        path: '/ui/components'
      },
      {
        id: 1,
        title: 'Formulários',
        path: '/ui/formularios'
      },
      {
        id: 2,
        title: 'Tabelas',
        path: '/ui/tabelas'
      }
    ]
  },
  {
    id: 2,
    title: 'Configurações',
    icon: BsTools,
    subMenus: [
      {
        id: 0,
        title: 'Geral',
        path: '/configuracoes/geral'
      }
    ]
  },
  {
    id: 3,
    title: 'errors',
    icon: BsExclamationTriangle,
    subMenus: [
      {
        id: 0,
        title: 'Não encontrado',
        path: '/errors/nao-encontrado'
      },
      {
        id: 1,
        title: 'Sem conexão',
        path: '/errors/sem-conexao'
      },
      {
        id: 2,
        title: 'Erro interno',
        path: '/errors/erro-interno'
      },
      {
        id: 3,
        title: 'Não autorizado',
        path: '/errors/nao-autorizado'
      }
    ]
  }
]

export default MENUS
