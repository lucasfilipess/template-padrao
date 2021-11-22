import React from 'react'
import { BsPencil } from 'react-icons/bs'
import { ThemedCard, CodeBlock } from 'components/atoms'
import { codeExample } from './codeExample'
import cardImage from 'assets/images/card.png'
import styles from './styles.module.css'

const Cards: React.FC = () => {
  return (
    <div>
      <div className={styles.grid}>
        <ThemedCard
          closeButton
          title="Card com tema"
          icon={BsPencil}
          text="There are many variations of passages of Lorem Ipsum available, but the majority."
          button
          buttonLabel="Próximo"
        />
        <ThemedCard
          closeButton
          title="Card simples"
          text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          button
          buttonLabel="Próximo"
        />
        <ThemedCard
          closeButton
          title="Card com tema"
          icon={BsPencil}
          text="There are many variations of passages of Lorem Ipsum available, but the majority."
          button
          buttonLabel="Próximo"
        />
        <ThemedCard
          closeButton
          text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          src={cardImage}
        />
        <ThemedCard
          text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable."
          src={cardImage}
          cover
        />
        <ThemedCard
          text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable."
          src={cardImage}
        />
        <ThemedCard
          title="Card simples"
          text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          button
          buttonLabel="Próximo"
          src={cardImage}
        />
        <ThemedCard
          title="Card com foto"
          text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable."
          src={cardImage}
          cover
          reverse
        />
        <ThemedCard
          closeButton
          title="Card simples"
          text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          button
          buttonLabel="Próximo"
          src={cardImage}
        />
      </div>
      <CodeBlock code={codeExample} />
    </div>
  )
}

export default Cards
