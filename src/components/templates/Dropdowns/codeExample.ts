export const codeExample = `
  import {
      Dropdown,
      MenusProps,
      Select,
      OptionsProps
  } from 'components/atoms'

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

    <Dropdown menus={menus}>Dropdown Button</Dropdown>
    <Select
        defaultValue="select"
        label="Select"
        name="select"
        options={options}
    />
`
