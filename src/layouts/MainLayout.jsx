import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const MainLayoutWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.color.gray};
`

const MainLayout = ({ children, withFooter }) => {
  return (
    <MainLayoutWrapper>
      {/* TODO: add header */}
      {children}
      {withFooter && <>{/* TODO: add footer */}</>}
    </MainLayoutWrapper>
  )
}

MainLayout.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.instanceOf(null),
  ]),
  withFooter: PropTypes.bool,
}

MainLayout.defaultProps = {
  withFooter: true,
}

export default MainLayout
