import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { ListOfFavs } from '../components/ListOfFavs'
const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) {
    return <p style={{ textAlign: 'center', paddingTop: '10px' }}>Loading</p>
  }
  if (error) return <p>Error!</p>
  const { favs } = data
  if (favs.length !== 0) {
    return <ListOfFavs favs={favs} />
  } else {
    return (
      <p style={{ textAlign: 'center', paddingTop: '10px' }}>
        You don't have favs yet
      </p>
    )
  }
}

export const FavsWithQuery = () => {
  return (
    // fetchPolicy network-only means the component Query will fetch the all the data instead of check the cache
    <Query query={GET_FAVS} fetchPolicy='network-only'>
      {renderProp}
    </Query>
  )
}
