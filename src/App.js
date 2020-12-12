import React, { useContext } from 'react'
import { GlobalStyle } from './components/styles/GlobalStyle'
import { Home } from './pages/Home'
import { Logo } from './components/Logo'
import { Redirect, Router } from '@reach/router'
import { Detail } from './pages/detail'
import { NavBar } from './components/NavBar'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotFound } from './pages/NotFound'

import { Context } from './Context'
export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisterUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <User path='/user' />
        <Favs path='/favs' />
      </Router>

      <NavBar />
    </>
  )
}
