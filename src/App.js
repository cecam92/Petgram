import React from 'react'
import { GlobalStyle } from './components/styles/GlobalStyle'
import { Home } from './pages/Home'
import { Logo } from './components/Logo'
import { Router } from '@reach/router'
import { Detail } from './pages/detail'
import { NavBar } from './components/NavBar'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { User } from './pages/User'
import { Favs } from './pages/Favs'

import Context from './Context'
export default function () {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <Context.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <User path='/user' />
              <Favs path='/favs' />
            </Router>
          ) : (
            <Router>
              <NotRegisterUser path='/favs' />
              <NotRegisterUser path='/user' />
            </Router>
          )
        }
      </Context.Consumer>
      <NavBar />
    </>
  )
}
