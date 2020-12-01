import React from 'react'
import { GlobalStyle } from './components/styles/GlobalStyle'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

export default function () {
  const urlParamas = new window.URLSearchParams(window.location.search)
  const detailId = urlParamas.get('detail')
  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCards />
        </>
      )}
    </>
  )
}
