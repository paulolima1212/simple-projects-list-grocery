// List Header Components

import { styled } from '../../../../styles'

export const ListHeaderContainer = styled('div', {
  width: '100%',
  background: 'White',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
})

export const Title = styled('h2', {
  fontSize: '1.75rem',
  color: '$title',
})

export const ContainerInput = styled('form', {
  display: 'flex',
  width: '100%',
})

export const Input = styled('input', {
  width: '100%',
  padding: '10px',
  border: '1px solid $title',
  outline: 'none',
})

export const Button = styled('button', {
  background: '$button',
  color: 'White',
  minWidth: '100px',
  fontWeight: '500',
  border: 'solid 1px $title',
  cursor: 'pointer',
  textAlign: 'center',

  '&:hover': {
    opacity: '0.9',
  },
})
