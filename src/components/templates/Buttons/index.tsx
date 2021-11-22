import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { CodeBlock } from 'components/atoms'
import { codeExample } from './codeExample'
import styles from './styles.module.css'

const Buttons: React.FC = () => {
  return (
    <div className={styles.grid}>
      <Card>
        <Card.Body>
          <Card.Title>Example</Card.Title>
          <Card.Subtitle>
            Bootstrap possui vários estilos de botões pré-definidos, cada um com
            seu propósito semântico e outros recursos extras para mais controle.
          </Card.Subtitle>
          <div className={styles.buttonContainer}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="info">Info</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
          </div>
          <CodeBlock code={codeExample[0]} />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Botões outline</Card.Title>
          <Card.Subtitle>
            Precisa de um botão, mas sem cor de background? Basta passar a prop{' '}
            <code>variant={`"outline-*"`}</code> que removem todas as imagens de
            background e cores, em qualquer botão.
          </Card.Subtitle>
          <div className={styles.buttonContainer}>
            <Button variant="outline-primary">Primary</Button>
            <Button variant="outline-secondary">Secondary</Button>
            <Button variant="outline-success">Success</Button>
            <Button variant="outline-warning">Warning</Button>
            <Button variant="outline-danger">Danger</Button>
            <Button variant="outline-info">Info</Button>
            <Button variant="outline-light">Light</Button>
            <Button variant="outline-dark">Dark</Button>
          </div>
          <CodeBlock code={codeExample[1]} />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Button tags</Card.Title>
          <Card.Subtitle>
            Normalmente os componentes <code>&lt;Button&gt;</code> irão
            renderizar um elemento HTML <code>&lt;button&gt;</code>. No entanto,
            você pode renderizar o que quiser, adicionar um prop href
            renderizará automaticamente um elemento <code>&lt;a /&gt;</code>. O
            React Bootstrap cuidará das funções ARIA adequadas para você.
          </Card.Subtitle>
          <div className={styles.buttonContainer}>
            <Button href="#">Link</Button> <Button type="submit">Button</Button>
            <Button as="input" type="button" value="Input" />
            <Button as="input" type="submit" value="Submit" />
            <Button as="input" type="reset" value="Reset" />
          </div>
          <CodeBlock code={codeExample[2]} />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Tamanhos</Card.Title>
          <Card.Subtitle>
            Botões maiores ou menores? Adicione <code>size={`"lg"`}</code>,{' '}
            <code>size={`"sm"`}</code> para tamanhos adicionais.
          </Card.Subtitle>
          <div className={styles.buttonContainer}>
            <Button variant="primary" size="lg">
              Large button
            </Button>
            <Button variant="secondary" size="lg">
              Large button
            </Button>
            <Button variant="primary" size="sm">
              Small button
            </Button>
            <Button variant="secondary" size="sm">
              Small button
            </Button>
          </div>
          <CodeBlock code={codeExample[3]} />
        </Card.Body>
      </Card>
    </div>
  )
}

export default Buttons
