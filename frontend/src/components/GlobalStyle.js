import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  *::-webkit-scrollbar {
  width: 5px;
  }

  *::-webkit-scrollbar-track {
  background: transparent;
  }

  *::-webkit-scrollbar-thumb {
  background-color: rgba(155, 155, 155, 0.5);
  border-radius: 20px;
  border: transparent;
  }

  :root{
  scrollbar-color: rgba(155, 155, 155, 0.5) rgba(0, 0, 0, 0.5) !important;
  scrollbar-width: thin !important;
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
  }
  
  button {
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #46EB43;
  background: transparent;
  color: white;
  transition: all 0.5s ease;
  font-family: 'Lato', sans-serif;
  &:hover{
    background-color: #46EB43;
    color: black;
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
  outline: none;
  }

  span {
  font-weight: bold;
  color: #46EB43;
  }

  p {
  color: #ccc;
  font-size: 1.4rem;
  line-height: 150%;
  }

  @media (max-width: 800px) {
    h2 {
      font-size: 2rem;
    }
  }

  @media (min-width: 2800px) {
    h2 {
      font-size: 8rem;
    }
  }
`
export default GlobalStyle
