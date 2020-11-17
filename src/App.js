import React from 'react'
import { GlobalStyle } from './GlobalStyle'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

export default function () {
  return (
    <>
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  )
}
