/**
 * Example useWindowResize hook
 */

import { useState, useEffect } from "react"

const useWindowResize = () => {
  const [sizes, setSizes] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  const resizeHandler = () =>
    setSizes({
      height: window.innerHeight,
      width: window.innerWidth,
    })

  useEffect(() => {
    window.addEventListener("resize", resizeHandler)
    return () => window.removeEventListener("resize", resizeHandler)
  }, [])

  return {
    windowHeight: sizes.height,
    windowWidth: sizes.width,
  }
}

export default useWindowResize
