import React from 'react'
import { Card } from 'react-bootstrap'
import {
  Accordion,
  ItemArrayProps,
  CodeBlock,
  Tabs,
  TabArrayProps
} from 'components/atoms'
import { textExample } from './textExample'
import { codeExample } from './codeExample'
import styles from './styles.module.css'

const TabsAccordions: React.FC = () => {
  const itemArray: ItemArrayProps = [
    {
      eventKey: '0',
      header: 'Accordion Item #1',
      body: textExample[0]
    },
    {
      eventKey: '1',
      header: 'Accordion Item #2',
      body: textExample[1]
    }
  ]

  const tabArray: TabArrayProps = [
    {
      tab: {
        eventKey: 'home',
        title: 'Home'
      },
      content: textExample[0]
    },
    {
      tab: {
        eventKey: 'profile',
        title: 'Perfil'
      },
      content: textExample[1]
    },
    {
      tab: {
        eventKey: 'contact',
        title: 'Mensagens'
      },
      content: textExample[2]
    },
    {
      tab: {
        eventKey: 'settings',
        title: 'Configurações'
      },
      content: textExample[3]
    }
  ]

  return (
    <div className={styles.grid}>
      <Card>
        <Card.Body>
          <Card.Title>Accordion</Card.Title>
          <Card.Subtitle>
            Estenda o comportamento padrão de recolhimento para criar um
            accordion.
          </Card.Subtitle>
          <Accordion defaultActiveKey="0" itemArray={itemArray} />
          <CodeBlock code={codeExample[0]} />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Tabs</Card.Title>
          <Card.Subtitle>
            Crie interfaces dinâmicas com guias. Tabs é um componente de nível
            superior para criar rapidamente um <code>Nav</code> combinado com um
            conjunto de <code>Tabs</code>.
          </Card.Subtitle>
          <Tabs defaultActiveKey="home" tabArray={tabArray} />
          <CodeBlock code={codeExample[1]} />
        </Card.Body>
      </Card>
    </div>
  )
}

export default TabsAccordions
