import React from "react"
import PropTypes from "prop-types"
import { HeaderWrapper, Title } from "../common/common.styles"
import { useTranslation } from "react-i18next"

const Header = () => {
  const { t } = useTranslation()
  return (
    <HeaderWrapper>
      <Title>{t("common.exampleHeader")}</Title>
    </HeaderWrapper>
  )
}

Header.propTypes = {}
Header.defaultProps = {}

export default Header
