/**
 * Hook for use of async redux actions via useDispatch
 */

import { useDispatch } from "react-redux"

export const useReduxAction = (action) => {
  const dispatcher = useDispatch(action)
  return (...args) => dispatcher(...args)
}
