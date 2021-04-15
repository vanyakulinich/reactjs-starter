import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"

const MainPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <div>Main Page</div>
      <div>{t("common.exampleHeader")}</div>
    </>
  )
}

MainPage.propTypes = {}

MainPage.defaultProps = {}

export default MainPage
