import React from 'react'
import { Card } from 'react-bootstrap'
import { CodeBlock } from 'components/atoms'
import { codeExample } from './codeExample'
import { iconsExample } from './iconsExample'
import styles from './styles.module.css'

const Icons: React.FC = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Ícones</Card.Title>
        <Card.Subtitle>
          Inclua ícones populares em seus projetos React facilmente com{' '}
          <code>react-icons</code>, que utiliza importações ES6 que permitem
          incluir apenas os ícones que seu projeto está usando. Você pode
          consultar os ícones disponíveis em{' '}
          <a
            href="https://react-icons.github.io/react-icons"
            target="_blank"
            rel="noreferrer"
          >
            React Icons
          </a>
        </Card.Subtitle>
        <div className={styles.iconContainer}>
          {iconsExample.map(({ icon, label }, index) => (
            <div className={styles.icon} key={index}>
              {icon}
              <span>{label}</span>
            </div>
          ))}
        </div>
        <CodeBlock code={codeExample} />
      </Card.Body>
    </Card>
  )
}

export default Icons
