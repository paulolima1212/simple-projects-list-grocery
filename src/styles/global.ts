import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
    fontFamily: 'Segoe UI',
  },

  button: {
    all: 'unset',
    lineHeight: 0,
    cursor: 'pointer',
  },
})
