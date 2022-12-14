import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }


 body {
  background-color: ${(props) => props.theme['base-background']};
 }


 body, input, textarea, button {
  font: 400 1rem 'Nunito', sans-serif;
  color: ${(props) => props.theme['base-title']};
 }


 ::-webkit-scrollbar {
    width: 0.4rem;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme['base-input']}
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ theme }) => theme.blue}
  }
`
