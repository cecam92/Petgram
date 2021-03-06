import React, { useContext } from 'react'
import { Article, ImgWrapper, Img } from './styles'
import { useNearScreen } from '../hooks/useNearScreen'
import { FavButton } from '../FavButton/'
import { Link } from '@reach/router'
import { Context } from '../../Context'

import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, liked, src = DEFAULT_IMAGE }) => {
  const { show, element } = useNearScreen()
  const { isAuth } = useContext(Context)
  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
        </>
      )}
      {!isAuth && (
        <FavButton
          liked={liked}
          likes={likes}
          onClick={() => {
            window.alert('Sign in if you like a picture')
          }}
        />
      )}
      {isAuth && (
        <ToggleLikeMutation>
          {(toggleLike) => {
            const handleFavClick = () => {
              toggleLike({
                variables: {
                  input: { id }
                }
              })
            }
            return (
              <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
            )
          }}
        </ToggleLikeMutation>
      )}
    </Article>
  )
}
