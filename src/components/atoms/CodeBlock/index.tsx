import React, { useState } from 'react'
import { useTheme } from 'hooks'
import { Prism } from 'react-syntax-highlighter'
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'
import classNames from 'classnames'
import { Button } from 'react-bootstrap'
import styles from './styles.module.css'

export type Props = {
  code: string
}

const CodeBlock: React.FC<Props> = ({ code }) => {
  const { theme } = useTheme()
  const style = theme === 'light' ? prism : theme === 'dark' && okaidia
  const [showCopyButton, setShowCopyButton] = useState<boolean>(false)
  const [copyButtonText, setCopyButtonText] = useState<string>('copiar')

  function handleCopy() {
    navigator.clipboard.writeText(code)
    setCopyButtonText('copiado')
    setTimeout(() => {
      setCopyButtonText('copiar')
    }, 1000)
  }

  function handleMouseEnter() {
    setShowCopyButton(true)
  }

  function handleMouseLeave() {
    setShowCopyButton(false)
  }

  return (
    <div
      className={styles.codeContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button
        className={classNames({
          [styles.visible]: showCopyButton
        })}
        onClick={handleCopy}
        size="sm"
        variant="outline-primary"
      >
        {copyButtonText}
      </Button>
      <Prism className={styles.prism} language="tsx" style={style}>
        {`
        ${code}
        `}
      </Prism>
    </div>
  )
}

export default CodeBlock
