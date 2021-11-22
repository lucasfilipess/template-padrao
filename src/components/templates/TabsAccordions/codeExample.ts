export const codeExample = [
  `
    import { Accordion, ItemArrayProps } from 'components/atoms'

      const itemArray: ItemArrayProps = [
        {
          eventKey: '0',
          header: 'Accordion Item #1',
          body: Conteúdo do accordion
        },
        {
          eventKey: '1',
          header: 'Accordion Item #2',
          body: Conteúdo do accordion
        }
    ]

    <Accordion defaultActiveKey="0" itemArray={itemArray} />

`,
  `
    import { Tabs, TabArrayProps } from 'components/atoms'
    
    const tabArray: TabArrayProps = [
        {
          tab: {
            eventKey: 'home',
            title: 'Home'
          },
          content: <div>Conteúdo da tab</div>
        },
        {
          tab: {
            eventKey: 'profile',
            title: 'Perfil'
          },
          content: <div>Conteúdo da tab</div>
        },
        {
          tab: {
            eventKey: 'contact',
            title: 'Mensagens'
          },
          content: <div>Conteúdo da tab</div>
        },
        {
          tab: {
            eventKey: 'settings',
            title: 'Configurações'
          },
          content: <div>Conteúdo da tab</div>
        }
      ]

    <Tabs defaultActiveKey="home" tabArray={tabArray} />

  `
]
