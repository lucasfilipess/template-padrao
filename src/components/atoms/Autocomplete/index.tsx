import React, { useState } from 'react'
import { Form, FloatingLabel, OverlayTrigger, Tooltip } from 'react-bootstrap'
import AutocompleteComponent from 'react-autocomplete'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import styles from './styles.module.scss'

export type AutocompleteProps = {
  feedback?: string
  info?: string
  label?: string
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  feedback,
  info,
  label
}) => {
  const [value, setValue] = useState<string>('')

  return (
    <div className={styles.container}>
      {info && (
        <OverlayTrigger
          delay={{ show: 250, hide: 400 }}
          overlay={(overlayTriggerProps) => (
            <Tooltip id="info-tooltip" {...overlayTriggerProps}>
              {info}
            </Tooltip>
          )}
          placement="top"
          trigger={['hover', 'focus']}
        >
          <span className={styles.adornment}>
            <BsFillInfoCircleFill color="#94acc8" />
          </span>
        </OverlayTrigger>
      )}
      <Form.Group>
        <FloatingLabel className={styles.label} controlId="input" label={label}>
          <AutocompleteComponent
            getItemValue={(item) => item.label}
            items={[{ label: 'apple' }, { label: 'banana' }, { label: 'pear' }]}
            renderItem={(item, isHighlighted) => (
              <div
                style={{ background: isHighlighted ? 'lightgray' : 'white' }}
              >
                {item.label}
              </div>
            )}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onSelect={(val) => setValue(val)}
          />
          <Form.Control.Feedback type="invalid">
            {feedback}
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>
    </div>
  )
}

export default Autocomplete
