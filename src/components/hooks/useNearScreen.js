import { useEffect, useState, useRef } from 'react'
export const useNearScreen = () => {
  const [show, setShow] = useState(false)
  const element = useRef(null)
  useEffect(() => {
    // dinamic import, this is to give support for browser that do not support intersection observer
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      // IntersectionObserver is a function of window that show if the element is in the viewport
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])

  return { show, element }
}
