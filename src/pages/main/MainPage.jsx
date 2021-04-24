/**
 * Example of one of the pages for demonstation of integrations with redux,
 * including errors api errors handling
 */

import React from "react"
import PropTypes from "prop-types"

import { withReduxActions } from "../../hocs/withReduxActions" // useReduxAction hook can also be used
import { exampleAsync } from "../../redux/ducks/example.ducks"
import { useSelector } from "react-redux"
import { exampleValueSelector } from "../../redux/selectors"

import useWindowResize from "../../hooks/useWindowResize"
import CommonButton from "../../components/common/buttons/commonButton/CommonButton"
import { Title } from "../../components/common/common.styles"

const MainPage = ({ exampleAsync }) => {
  const { windowHeight, windowWidth } = useWindowResize()
  const exampleDataString = useSelector(exampleValueSelector)

  return (
    <>
      {/* NOTE: this is a test markup, replace it with yours */}
      <Title>Main Page</Title>
      <div>window width: {windowWidth}</div>
      <div>windowHeight: {windowHeight}</div>

      {exampleDataString && <div>EXAMPLE DATA: {exampleDataString}</div>}

      <br />
      <CommonButton label="Trigger example async action" onClick={exampleAsync} />
    </>
  )
}

MainPage.propTypes = {
  exampleAsync: PropTypes.func,
}

MainPage.defaultProps = {
  exampleAsync: () => {},
}

export default withReduxActions({ exampleAsync })(MainPage)
