import React from "react"
import PropTypes from "prop-types"
import { useHistory } from "react-router-dom"

import { HeaderWrapper, Title, NavWrapper } from "../common/common.styles"
import { useTranslation } from "react-i18next"
import CommonButton from "../common/buttons/commonButton/CommonButton"

const Header = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const goTo = (page) => () => history.push(`/${page}`)

  return (
    <HeaderWrapper>
      <Title>{t("common.exampleHeader")}</Title>

      <NavWrapper>
        <CommonButton label="Main" onClick={goTo("")} />
        <CommonButton label="Example Dashboard" onClick={goTo("dashboard")} />
      </NavWrapper>
    </HeaderWrapper>
  )
}

Header.propTypes = {}
Header.defaultProps = {}

export default Header
