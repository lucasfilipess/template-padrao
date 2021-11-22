import React from 'react'
import { FormsCard, FormsCardProps } from 'components/organisms'

const Forms: React.FC<FormsCardProps> = ({
  initialValues,
  onSubmit,
  validationSchema
}) => {
  return (
    <FormsCard
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    />
  )
}

export default Forms
