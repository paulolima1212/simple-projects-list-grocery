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

// List Header Components

export const ListHeader = styled('div', {
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

//List Content Components

export const ListContent = styled('div', {
  background: 'White',
  boxShadow: '$shadow1',
  width: '100%',
})

export const List = styled('ol', {
  position: 'relative',
  padding: '10px 20px 10px 40px',
  width: '100%',
  minHeight: '398px',
  background:
    'White repeating-linear-gradient(transparent 0%, transparent 99%, #000 99%, #000 100%)',
  backgroundSize: '50px 50px',
})

export const Item = styled('li', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  fontSize: '1.5rem',
  height: '50px',
  paddingBottom: '20px',

  span: {
    cursor: 'pointer',
  },
})

export const ItemButtons = styled('div', {
  display: 'flex',
  gap: '1rem',

  button: {
    display: 'flex',
    gap: '1rem',
  },
})

export const ItemName = styled('span', {
  cursor: 'pointer',
  flex: 1,

  variants: {
    isDone: {
      true: {
        textDecoration: 'line-through',
        color: '$title',
      },
      false: {
        textDecoration: 'none',
      },
    },
  },
})
