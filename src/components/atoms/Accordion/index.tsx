import React, { ReactNode } from 'react'
import {
  Accordion as BootstrapAccordion,
  AccordionProps as BootstrapAccordionProps
} from 'react-bootstrap'
import styles from './styles.module.css'

export type ItemArrayProps = {
  eventKey: string
  header: ReactNode
  body: ReactNode
}[]

export type AccordionProps = BootstrapAccordionProps & {
  itemArray: ItemArrayProps
}

const Accordion: React.FC<AccordionProps> = ({ itemArray, ...rest }) => {
  return (
    <BootstrapAccordion className={styles.accordion} {...rest}>
      {itemArray.map(({ eventKey, header, body }, index) => (
        <BootstrapAccordion.Item key={`accordion-${index}`} eventKey={eventKey}>
          <BootstrapAccordion.Header>{header}</BootstrapAccordion.Header>
          <BootstrapAccordion.Body>{body}</BootstrapAccordion.Body>
        </BootstrapAccordion.Item>
      ))}
    </BootstrapAccordion>
  )
}

export default Accordion
