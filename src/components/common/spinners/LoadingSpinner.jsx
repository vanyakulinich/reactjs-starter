import React from "react"
import PropTypes from "prop-types"
import ReactLoading from "react-loading"
import styled from "styled-components"

const LoadingWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  height: ${(props) => (props.showOnFullPage ? "100vh" : "100%")};
  ${(props) =>
    props.isTransparent &&
    `
    position: ${props.showOnFullPage ? "fixed" : "absolute"};
    top: 0;
    left: 0;
    background: #f5f5f5c7;
    
    
    pointer-events: bounding-box;
    height: ${props.height || "100vh"};
    width: ${props.width || "100vw"};   
    
  `}

  z-index: 2000;
  ${(props) =>
    props.withTransparentShadow &&
    `
   box-shadow: 0px 0px 19px 5px #f5f5f5c7; 
  `}
`
const LoadingInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
`

const LoadingSpinner = ({
  showOnFullPage,
  isTransparent,
  height,
  width,
  withTransparentShadow,
  spinnerType,
  spinnerHeight,
  spinnerWidth,
}) => {
  const possibleSpinnerTypes = [
    "bars",
    "blank",
    "balls",
    "bubbles",
    "cubes",
    "cylon",
    "spin",
    "spinningBubbles",
    "spokes",
  ]

  const type = possibleSpinnerTypes.some((t) => t === spinnerType)
    ? possibleSpinnerTypes.find((t) => t === spinnerType)
    : possibleSpinnerTypes[0]

  return (
    <LoadingWrapper
      showOnFullPage={showOnFullPage}
      isTransparent={isTransparent}
      withTransparentShadow={withTransparentShadow}
      height={height}
      width={width}
      className="loading_spinner_wrapper"
    >
      <LoadingInnerWrapper className="spinner-border text-primary" role="status">
        <ReactLoading
          type={type}
          color={"rgba(64, 61, 61, 0.38)"}
          height={spinnerHeight}
          width={spinnerWidth}
          className="loading_spinner_wrap"
        />
      </LoadingInnerWrapper>
    </LoadingWrapper>
  )
}

LoadingSpinner.propTypes = {
  showOnFullPage: PropTypes.bool,
  isTransparent: PropTypes.bool,
  withTransparentShadow: PropTypes.bool,
  spinnerType: PropTypes.string,
  spinnerHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  spinnerWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

LoadingSpinner.defaultProps = {
  showOnFullPage: false,
  isTransparent: true,
  withTransparentShadow: false,
  spinnerType: "bars",
  spinnerHeight: 64,
  spinnerWidth: 64,
}

export default LoadingSpinner
