import React from 'react'
import { useInputValue } from '../hooks/useInputValue'
import { Input, Form, Title, Error } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email, password })
  }
  return (
    <>
      <Form onSubmit={handleSubmit} disabled={disabled}>
        <Title>{title}</Title>
        <Input placeholder='email' {...email} disabled={disabled} />
        <Input
          placeholder='Password'
          type='password'
          {...password}
          disabled={disabled}
        />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
