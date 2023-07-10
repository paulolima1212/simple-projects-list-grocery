import { styled } from '../../../../styles'

export const ListContentContainer = styled('div', {
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
