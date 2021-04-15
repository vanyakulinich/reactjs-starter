import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Header from "../components/header/Header"

const MainLayoutWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.color.gray};
  ${(props) => props.theme.flexColumn};
  justify-content: flex-start;
`

const MainLayout = ({ children, withFooter }) => {
  return (
    <MainLayoutWrapper>
      <Header />
      {children}
      {withFooter && <>{/* TODO: add footer */}</>}
    </MainLayoutWrapper>
  )
}

MainLayout.propTypes = {
  children: PropTypes.oneOfType(
    [PropTypes.arrayOf(PropTypes.node), PropTypes.node],
    PropTypes.instanceOf(null)
  ),
  withFooter: PropTypes.bool,
}

MainLayout.defaultProps = {
  withFooter: true,
}

export default MainLayout
