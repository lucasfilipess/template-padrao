import React from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import { Card, Form, Button } from 'react-bootstrap'
import { Checkbox, CodeBlock } from 'components/atoms'
import { codeExample } from './codeExample'
import styles from './styles.module.css'

type CustomCheckFormValues = {
  customCheck1: boolean
  customCheck2: boolean
  customCheck3: boolean
  customCheck4: boolean
}

const customCheckSchemaMessage = 'Custom Check é obrigatório.'
const customCheckSchema = yup.object().shape({
  customCheck1: yup.bool().required().oneOf([true], customCheckSchemaMessage),
  customCheck2: yup.bool().required().oneOf([true], customCheckSchemaMessage),
  customCheck3: yup.bool().required().oneOf([true], customCheckSchemaMessage),
  customCheck4: yup.bool().required().oneOf([true], customCheckSchemaMessage)
})

const CheckboxRadio: React.FC = () => {
  const initialCustomCheckValues: CustomCheckFormValues = {
    customCheck1: false,
    customCheck2: false,
    customCheck3: false,
    customCheck4: false
  }

  const onSubmitCustomCheck = (values: CustomCheckFormValues) =>
    alert(JSON.stringify(values))

  return (
    <Card>
      <Card.Body>
        <Card.Title> Checkbox Customizado</Card.Title>
        <Card.Subtitle>
          Para criar um checkbox personalizado, basta utilizar o Form.Checkbox
          do bootstrap
        </Card.Subtitle>
        <Formik
          initialValues={initialCustomCheckValues}
          onSubmit={onSubmitCustomCheck}
          validationSchema={customCheckSchema}
        >
          {({ errors, handleSubmit, handleChange, touched }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <div className={styles.checkContainer}>
                <Checkbox
                  feedback={errors.customCheck1}
                  isInvalid={touched.customCheck1 && !!errors.customCheck1}
                  label="Custom Check"
                  name="customCheck1"
                  onChange={handleChange}
                  required
                />
                <Checkbox
                  feedback={errors.customCheck2}
                  isInvalid={touched.customCheck2 && !!errors.customCheck2}
                  label="Custom Check"
                  name="customCheck2"
                  onChange={handleChange}
                  required
                />
                <Checkbox
                  feedback={errors.customCheck3}
                  isInvalid={touched.customCheck3 && !!errors.customCheck3}
                  label="Custom Check"
                  name="customCheck3"
                  onChange={handleChange}
                  required
                />
                <Checkbox
                  feedback={errors.customCheck4}
                  isInvalid={touched.customCheck4 && !!errors.customCheck4}
                  label="Custom Check"
                  name="customCheck4"
                  onChange={handleChange}
                  required
                />
              </div>
              <Button variant="primary" type="submit">
                Salvar
              </Button>
            </Form>
          )}
        </Formik>
        <br />
        <CodeBlock code={codeExample[0]} />
        <br />
        <Card.Title>Radio Customizado</Card.Title>
        <Card.Subtitle>
          Para criar um radio personalizado, basta passar a prop{' '}
          <code>type={`"radio"`}</code>
        </Card.Subtitle>
        <Formik
          initialValues={{}}
          onSubmit={() => {
            console.log('onSubmit')
          }}
        >
          {({ handleSubmit, handleChange }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <div className={styles.checkContainer}>
                <Checkbox
                  inline
                  label="Custom Radio"
                  name="customRadio"
                  onChange={handleChange}
                  required
                  type="radio"
                />
                <Checkbox
                  inline
                  label="Custom Radio"
                  name="customRadio"
                  onChange={handleChange}
                  required
                  type="radio"
                />
              </div>
            </Form>
          )}
        </Formik>
        <br />
        <CodeBlock code={codeExample[1]} />
      </Card.Body>
    </Card>
  )
}

export default CheckboxRadio
