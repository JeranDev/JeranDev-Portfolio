import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  html {
  @media (max-width: 1700px) {
    font-size: 75%
  }
  }

  body {
  background: #1B1B1B;
  color: white;
  font-family: 'Lato', sans-serif;
  overflow-x: hidden;
  overflow-y: hidden;
  }
  
  button {
  font-weight: bold;
  font-size: 1.1.rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #23d997;
  background: transparent;
  color: white;
  transition: all 0.5s ease;
  font-family: 'Lato', sans-serif;
  &:hover{
    background-color: #23d997;
    color: white;
    }
  }


  h2 {
  font-weight: lighter;
  font-size: 4rem;
  }

  h3 {
  color: white;
  }

  h4 {
  font-weight: bold;
  font-size: 2rem;
  }

  a {
  font-size: 1.1.rem;
  }

  span {
  font-weight: bold;
  color: #46EB43;
  }

  p {
  padding: 3rem 0;
  color: #ccc;
  font-size: 1.4rem;
  line-height: 150%;
  }
`
export default GlobalStyle
