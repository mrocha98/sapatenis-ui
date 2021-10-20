import React, { ReactNode, ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

type HTMLButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export interface ButtonProps extends HTMLButtonProps {
  children: ReactNode
}

const StyledButton = styled.button`
  padding: 18px;
  border-radius: 3%;
  text-transform: uppercase;
`

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  )
}

