import React from 'react'
import { useInputValue } from '../hooks/useInputValue'
import { Input, Form, Button, Title, Error } from './styles'

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
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
