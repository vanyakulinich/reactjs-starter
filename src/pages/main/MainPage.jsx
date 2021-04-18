import React from "react"
import PropTypes from "prop-types"
import useWindowResize from "../../hooks/useWindowResize"
import { Title } from "../../components/common/common.styles"

const MainPage = () => {
  const { windowHeight, windowWidth } = useWindowResize()

  return (
    <>
      {/* NOTE: this is a test markup, replace it with yours */}
      <Title>Main Page</Title>
      <div>window width: {windowWidth}</div>
      <div>windowHeight: {windowHeight}</div>
    </>
  )
}

MainPage.propTypes = {}

MainPage.defaultProps = {}

export default MainPage
