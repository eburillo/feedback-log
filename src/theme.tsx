import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    darker: '#3b0d50',
    darkPurple: '#5f2b77',
    lightPurple: '#612e81',
    green: '#31b698',
    gray: '#f2f4f5',
    white: '#ffffff',
  },
}

export { theme }

export const getColor = (color: string) => (props: any): string =>
  props.theme.colors[color]
