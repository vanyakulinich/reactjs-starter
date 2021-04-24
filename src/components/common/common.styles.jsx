import styled from "styled-components"

// add more common styled wrappers here
export const HeaderWrapper = styled.nav`
  height: 70px;
  width: 100%;
  background: ${(props) => props.theme.color.white};
  ${(props) => props.theme.flexRow}
  justify-content: space-around;
`

export const NavWrapper = styled.div`
  ${(props) => props.theme.flexRow}
`

export const FooterWrapper = styled.footer`
  height: 50px;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  background: ${(props) => props.theme.color.white};
  ${(props) => props.theme.flexRow}
`

export const CommonButtonWrapper = styled.button`
  border: 1px solid lightgray;
  border-radius: 4px;
  outline: none;
  background: none;
  padding: 10px;
  &:active {
    outline: none;
  }
  transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    font-weight: 700;
  }
`

export const Title = styled.h2`
  color: ${(props) => props.theme.color.black};
  text-align: center;
`
