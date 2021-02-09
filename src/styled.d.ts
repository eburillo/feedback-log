import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      darker: string
      darkPurple: string
      lightPurple: string
      green: string
      gray: string
      white: string
    }
  }
}
