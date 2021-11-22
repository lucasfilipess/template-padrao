import { ElementType } from 'react'
import {
  BsBarChartLine,
  BsPalette,
  BsExclamationTriangle,
  BsClipboard,
  BsDiagram3Fill
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
    title: 'Formulários',
    path: '/formularios',
    icon: BsClipboard
  },
  {
    id: 2,
    title: 'UI',
    icon: BsPalette,
    subMenus: [
      {
        id: 1,
        title: 'Tabelas',
        path: '/ui/tabelas'
      },
      {
        id: 2,
        title: 'Alertas',
        path: '/ui/alertas'
      },
      {
        id: 3,
        title: 'CheckBox - Radio',
        path: '/ui/checkbox-radio'
      },
      {
        id: 4,
        title: 'Botões',
        path: '/ui/botoes'
      },
      {
        id: 5,
        title: 'Cards',
        path: '/ui/cards'
      },
      {
        id: 6,
        title: 'Dropdowns',
        path: '/ui/dropdowns'
      },
      {
        id: 7,
        title: 'Lightbox',
        path: '/ui/lightbox'
      },
      {
        id: 8,
        title: 'Modal',
        path: '/ui/modal'
      },
      {
        id: 9,
        title: 'Tabs/Accordions',
        path: '/ui/tabs-accordions'
      },
      {
        id: 10,
        title: 'Ícones',
        path: '/ui/icones'
      }
    ]
  },
  {
    id: 3,
    title: 'Axios',
    path: '/axios',
    icon: BsDiagram3Fill
  },
  {
    id: 4,
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
