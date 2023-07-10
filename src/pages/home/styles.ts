import { styled } from '../../styles'

export const MainContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  background: '$gradient1',
  minHeight: '100vh',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '$shadow1',
  padding: '2rem',
})

export const ListContainer = styled('div', {
  display: 'flex',
  width: '400px',
  flexDirection: 'column',
  gap: '1.5rem',
})
