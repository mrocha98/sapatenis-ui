import React, { ReactNode } from 'react'
import styled from 'styled-components'

export type ButtonProps = {
  children: ReactNode
}

const StyledButton = styled.button`
  padding: 18px;
  border-radius: 5%;
  text-transform: uppercase;
`

export const Button = ({ children }: ButtonProps) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  )
}

