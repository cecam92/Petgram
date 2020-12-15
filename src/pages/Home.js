import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'
export const Home = ({ id }) => {
  return (
    <Layout
      title="The Pet's Media"
      subtitle='In Petgram you can find cute pets pictures'
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}
