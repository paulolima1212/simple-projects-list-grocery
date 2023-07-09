import { createStitches } from '@stitches/react'

export const {
  styled,
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  theme,
} = createStitches({
  theme: {
    colors: {
      gradient1:
        'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
      title: '#333',
      button: '#4bae4f',
      gray: '#575757',
    },
    shadows: {
      shadow1: '15px 15px 15px rgba(0,0,0,0.1)',
    },
  },
})
