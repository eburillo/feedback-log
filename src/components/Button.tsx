import React from 'react'
import styled, { css } from 'styled-components'
import { getColor } from '../theme'

export default React.memo(function Button(props: IButton) {
  return <StyledButton {...props}>{props.children}</StyledButton>
})

interface IButton {
  children: string
  primary?: boolean
  onClick?: () => void
}

const StyledButton = styled.button`
  height: 44px;
  display: flex;
  border-radius: 0;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 1px;
  text-transform: capitalize;
  padding: 0 25px;
  background-color: transparent;
  border: 3px solid ${getColor('darkPurple')};
  color: ${getColor('lightPurple')};
  :hover, :active {
    color: ${getColor('white')};
    background-color: ${getColor('darker')};
  }
  ${(props: IButton) => props.primary && `${PrimaryButtonStyles}`}};
`

const PrimaryButtonStyles = css`
  color: ${getColor('white')};
  background-color: ${getColor('darkPurple')};
  border-bottom: 3px solid ${getColor('green')};
`
