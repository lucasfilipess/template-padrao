export const codeExample = [
  `
  import { Checkbox } from 'components/atoms'

  <Checkbox
      feedback={errors.customCheck1}
      isInvalid={touched.customCheck1 && !!errors.customCheck1}
      label="Custom Check"
      name="customCheck1"
      onChange={handleChange}
      required
  />

`,
  `
  import { Checkbox } from 'components/atoms'
  
  <Checkbox
      inline
      feedback={errors.customCheck4}
      isInvalid={touched.customCheck4 && !!errors.customCheck4}
      label="Custom Check"
      name="customCheck"
      onChange={handleChange}
      required
      type="radio"
  />
`
]
