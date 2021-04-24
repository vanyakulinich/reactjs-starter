import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useSelector, shallowEqual } from "react-redux"
import { toast } from "react-toastify"
import { useTranslation } from "react-i18next"
import { withReduxActions } from "./withRedux"
import { resetError } from "../redux/ducks/errorDucks"
import { errorMsgNameSelector, isErrorSelector } from "../redux/selectors"

const withErrorsToastHandle = (WrappedComponent) => {
  const HOC = ({ resetError, ...props }) => {
    const isError = useSelector(isErrorSelector, shallowEqual)
    const toastMsgName = useSelector(errorMsgNameSelector, shallowEqual)

    const { t } = useTranslation()

    useEffect(() => {
      if (isError) toast(t(`errors.${toastMsgName}`) || toastMsgName, { onClose: resetError })
    }, [toastMsgName])

    return <WrappedComponent {...props} />
  }

  HOC.propTypes = {
    resetError: PropTypes.func,
  }

  HOC.defaultProps = {
    resetError: () => {},
  }

  return withReduxActions({ resetError })(HOC)
}

export default withErrorsToastHandle
