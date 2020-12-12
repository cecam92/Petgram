import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserFrom'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email: email.value, password: password.value }
            const variables = { input }
            register({ variables }).then(({ data }) => {
              const { signup } = data
              activateAuth(signup)
            })
          }
          const errorMsg =
            error && 'The user alredy exist or something went wrong'
          return (
            <UserForm
              disabled={loading}
              onSubmit={onSubmit}
              title='Sign Up'
              error={errorMsg}
            />
          )
        }}
      </RegisterMutation>
      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email: email.value, password: password.value }
            const variables = { input }
            login({ variables }).then(({ data }) => {
              const { login } = data
              activateAuth(login)
            })
          }
          const errorMsg = error && 'The user or password are not valid'
          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              onSubmit={onSubmit}
              title='Sign In'
            />
          )
        }}
      </LoginMutation>
    </>
  )
}
