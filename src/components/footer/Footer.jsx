import React from "react"
import PropTypes from "prop-types"
import { FooterWrapper, Title } from "../common/common.styles"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation()
  return (
    <FooterWrapper>
      <Title>{t("common.exampleFooter")}</Title>
    </FooterWrapper>
  )
}

Footer.propTypes = {}
Footer.defaultProps = {}

export default Footer
