import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BsPencil } from 'react-icons/bs'
import { Title, ThemedCard, Card, Button, Checkbox } from 'components/atoms'
import cardImage from 'assets/images/card.png'
import styles from './styles.module.scss'

export type ComponentsProps = {
  test?: string
}

const Components: React.FC = () => {
  return (
    <div className={styles.components}>
      <Title>Componentes</Title>
      <Container className={styles.container}>
        <Row>
          <Col md={4} xs={12}>
            <ThemedCard
              closeButton
              title="Card com tema"
              icon={BsPencil}
              text="There are many variations of passages of Lorem Ipsum available, but the majority."
              button
              buttonLabel="Próximo"
            />
          </Col>
          <Col md={4} xs={12}>
            <ThemedCard
              closeButton
              title="Card simples"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
              button
              buttonLabel="Próximo"
            />
          </Col>
          <Col md={4} xs={12}>
            <ThemedCard
              closeButton
              title="Card com tema"
              icon={BsPencil}
              text="There are many variations of passages of Lorem Ipsum available, but the majority."
              button
              buttonLabel="Próximo"
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} xs={12}>
            <ThemedCard
              closeButton
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
              src={cardImage}
            />
          </Col>
          <Col md={4} xs={12}>
            <ThemedCard
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable."
              src={cardImage}
              cover
            />
          </Col>
          <Col md={4} xs={12}>
            <ThemedCard
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable."
              src={cardImage}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} xs={12}>
            <ThemedCard
              title="Card simples"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
              button
              buttonLabel="Próximo"
              src={cardImage}
            />
          </Col>
          <Col md={4} xs={12}>
            <ThemedCard
              title="Card com foto"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable."
              src={cardImage}
              cover
              reverse
            />
          </Col>
          <Col md={4} xs={12}>
            <ThemedCard
              closeButton
              title="Card simples"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
              button
              buttonLabel="Próximo"
              src={cardImage}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} xs={12}>
            <Card>
              <Card.Body>
                <Card.Title>Pequenos</Card.Title>
                <div className={styles.spacer}>
                  <Button size="sm">Primary</Button>
                  <Button size="sm" disabled>
                    Primary
                  </Button>
                  <Button variant="secondary" size="sm">
                    secondary
                  </Button>
                  <Button variant="secondary" size="sm" disabled>
                    secondary
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card>
              <Card.Body>
                <Card.Title>Médios</Card.Title>
                <div className={styles.spacer}>
                  <Button>Primary</Button>
                  <Button disabled>Primary</Button>
                  <Button variant="secondary">secondary</Button>
                  <Button variant="secondary" disabled>
                    secondary
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card>
              <Card.Body>
                <Card.Title>Grandes</Card.Title>
                <div className={styles.spacer}>
                  <Button size="lg">Primary</Button>
                  <Button size="lg" disabled>
                    Primary
                  </Button>
                  <Button variant="secondary" size="lg">
                    secondary
                  </Button>
                  <Button variant="secondary" size="lg" disabled>
                    secondary
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={4} xs={12}>
            <Card>
              <Card.Body>
                <Card.Title>Outline Pequenos</Card.Title>
                <div className={styles.spacer}>
                  <Button variant="outline-primary" size="sm">
                    Primary
                  </Button>
                  <Button size="sm" variant="outline-primary" disabled>
                    Primary
                  </Button>
                  <Button variant="outline-secondary" size="sm">
                    secondary
                  </Button>
                  <Button variant="outline-secondary" size="sm" disabled>
                    secondary
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card>
              <Card.Body>
                <Card.Title>Outline Médios</Card.Title>
                <div className={styles.spacer}>
                  <Button variant="outline-primary">Primary</Button>
                  <Button variant="outline-primary" disabled>
                    Primary
                  </Button>
                  <Button variant="outline-secondary">secondary</Button>
                  <Button variant="outline-secondary" disabled>
                    secondary
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card>
              <Card.Body>
                <Card.Title>Outline Grandes</Card.Title>
                <div className={styles.spacer}>
                  <Button variant="outline-primary" size="lg">
                    Primary
                  </Button>
                  <Button variant="outline-primary" size="lg" disabled>
                    Primary
                  </Button>
                  <Button variant="outline-secondary" size="lg">
                    secondary
                  </Button>
                  <Button variant="outline-secondary" size="lg" disabled>
                    secondary
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6} xs={12}>
            <Card>
              <Card.Body>
                <Card.Title>Radio Button</Card.Title>
                <div className={styles.spacer}>
                  <Checkbox
                    label="Receber código por E-mail"
                    name="checkbox"
                    type="radio"
                    inline
                  />
                  <Checkbox
                    label="Receber código por SMS"
                    name="checkbox"
                    type="radio"
                    inline
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xs={12}>
            <Card>
              <Card.Body>
                <Card.Title>Checkbox</Card.Title>
                <div className={styles.spacer}>
                  <Checkbox
                    label="Receber código por E-mail"
                    name="email"
                    inline
                  />
                  <Checkbox label="Receber código por SMS" name="sms" inline />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Components
