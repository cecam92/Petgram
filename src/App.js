import React from 'react'
import { GlobalStyle } from './components/styles/GlobalStyle'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

export default function () {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  )
}
