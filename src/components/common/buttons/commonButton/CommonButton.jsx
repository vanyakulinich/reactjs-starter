import React from "react"
import PropTypes from "prop-types"
import { CommonButtonWrapper } from "../../common.styles"

const CommonButton = ({ label, onClick }) => {
  return <CommonButtonWrapper onClick={onClick}>{label}</CommonButtonWrapper>
}

CommonButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
}

CommonButton.defaultProps = {
  label: "",
  onClick: () => {},
}

export default CommonButton
