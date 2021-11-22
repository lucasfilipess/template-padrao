import React from 'react'
import { Card } from 'react-bootstrap'
import {
  Dropdown,
  MenusProps,
  Select,
  OptionsProps,
  CodeBlock
} from 'components/atoms'
import { codeExample } from './codeExample'
import styles from './styles.module.css'

const Dropdowns: React.FC = () => {
  const menus: MenusProps = [
    {
      label: 'Ação',
      onClick: () => console.log('onClick')
    },
    {
      label: 'Outra ação',
      onClick: () => console.log('onClick')
    },
    {
      label: 'Mais outra ação',
      onClick: () => console.log('onClick')
    }
  ]

  const options: OptionsProps = [
    {
      value: 'select',
      label: 'Abrir select'
    },
    {
      value: '1',
      label: 'Um'
    },
    {
      value: '2',
      label: 'Dois'
    },
    {
      value: '3',
      label: 'Três'
    }
  ]
  return (
    <Card>
      <Card.Body>
        <Card.Title> Dropdown</Card.Title>
        <Card.Subtitle>
          O Dropdown é composto por um Dropdown que envolvente,{' '}
          <code>&lt;DropdownMenu&gt;</code> e{' '}
          <code>&lt;DropdownToggle&gt;</code>. Por padrão, o{' '}
          <code>&lt;DropdownToggle&gt;</code> renderizará um componente Button e
          aceitará todos os mesmos adereços.
        </Card.Subtitle>
        <div className={styles.dropdownContainer}>
          <Dropdown menus={menus}>Dropdown Button</Dropdown>
          <Select
            defaultValue="select"
            label="Select"
            name="select"
            options={options}
          />
        </div>
        <CodeBlock code={codeExample} />
      </Card.Body>
    </Card>
  )
}

export default Dropdowns
