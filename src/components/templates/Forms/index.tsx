import React from 'react'
import { Title } from 'components/atoms'
import { FormsCard, FormsCardProps } from 'components/organisms'

export type FormsProps = FormsCardProps & {
  title: string
}

const Forms: React.FC<FormsProps> = ({
  title,
  initialValues,
  onSubmit,
  validationSchema
}) => {
  return (
    <>
      <Title>{title}</Title>
      <FormsCard
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      />
    </>
  )
}

export default Forms
