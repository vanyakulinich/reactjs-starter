import styled from "styled-components"

// add more common styled wrappers here
export const HeaderWrapper = styled.nav`
  height: 70px;
  width: 100%;
  background: ${(props) => props.theme.color.white};
  ${(props) => props.theme.flexRow}
`

export const CommonButtonWrapper = styled.button`
  border: 0;
  outine: none;
  background: none;
  padding: 10px;
  &:active {
    outline: none;
  }
`

export const Title = styled.h2`
  color: ${(props) => props.theme.color.black};
  text-align: center;
`
